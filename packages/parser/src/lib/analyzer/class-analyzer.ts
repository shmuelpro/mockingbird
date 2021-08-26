import { ClassPropsReflection, ClassReflector, Property } from '@mockinbird/reflect';
import { Class, Faker } from '@mockinbird/common';
import { MutationsCallback, ParserConfig, ParsingStrategy } from '../../types/types';
import { ValueHandler } from '../../types/value-handler.interface';
import { EnumValueHandler } from '../../handlers/enum-value-handler';
import { ArrayValueHandler } from '../../handlers/array-value-handler';
import { SingleClassValueHandler } from '../../handlers/single-class-value-handler';
import { CallbackValueHandler } from '../../handlers/callback-value-handler';
import { ObjectLiteralValueHandler } from '../../handlers/object-literal-value-handler';
import { PrimitiveValueHandler } from '../../handlers/primitive-value-handler';
import { Container } from 'typedi';
import { RegexValueHandler } from '../../handlers/regex-value-handler';

export class ClassAnalyzer<TClass = any> {
  private classReflection: ClassPropsReflection;

  private readonly valueHandlers: Class<ValueHandler>[] = [
    EnumValueHandler,
    ArrayValueHandler,
    SingleClassValueHandler,
    CallbackValueHandler,
    ObjectLiteralValueHandler,
    RegexValueHandler,
    PrimitiveValueHandler,
  ];

  public constructor(private readonly targetClass: Class<TClass>) {
    this.classReflection = ClassReflector.getInstance().reflectClass(targetClass);
  }

  private handlePropertyValue(property: Property): TClass | TClass[] {
    for (const classHandler of this.valueHandlers) {
      const handler = Container.get(classHandler);

      if (handler.shouldHandle(property)) {
        return handler.produceValue<TClass>(property);
      }
    }
  }

  public analyzeProps(config: ParserConfig<TClass> = {}): TClass {
    const { omit = [], pick = [] } = config;
    let { mutations = {} } = config;
    let strategy: ParsingStrategy;

    if (omit.length) {
      strategy = 'omit';
    } else if (pick.length) {
      strategy = 'pick';
    }

    if (omit.length && pick.length) {
      throw new Error('Can not use pick and omit at the same time');
    }

    if (typeof mutations === 'function') {
      const faker = Container.get<Faker>('Faker');
      mutations = (mutations as MutationsCallback<TClass>)(faker);
    }

    const deriveFromProps = (acc, property) => {
      let value;

      if (mutations.hasOwnProperty(property.name)) {
        value = mutations[property.name];
      }

      if (strategy == 'pick') {
        if (pick.includes(property.name)) {
          return { ...acc, [property.name]: value || this.handlePropertyValue(property) };
        }

        return acc;
      }

      if (omit.includes(property.name) && strategy == 'omit') {
        return acc;
      }

      return { ...acc, [property.name]: value || this.handlePropertyValue(property) };
    };

    const derivedProps = this.classReflection.reduce(deriveFromProps, {});
    return Object.assign(new this.targetClass(), derivedProps);
  }

  public static create<TClass = any>(targetClass: Class<TClass>): ClassAnalyzer<TClass> {
    return new ClassAnalyzer<TClass>(targetClass);
  }
}
