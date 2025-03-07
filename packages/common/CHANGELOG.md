# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.2](https://github.com/omermorad/mockingbird/compare/@mockinbird/common@2.0.1...@mockinbird/common@2.0.2) (2021-08-21)

**Note:** Version bump only for package @mockinbird/common





## 2.0.1 (2021-08-21)

**Note:** Version bump only for package @mockinbird/common





# 2.0.0 (2021-07-31)


### chore

* **release:** release version v2.0.0 ([#53](https://github.com/omermorad/mockingbird-ts/issues/53)) ([f598ef3](https://github.com/omermorad/mockingbird-ts/commit/f598ef35d5b9111f66202f119b8961314483f4fb)), closes [#51](https://github.com/omermorad/mockingbird-ts/issues/51) [#40](https://github.com/omermorad/mockingbird-ts/issues/40) [#42](https://github.com/omermorad/mockingbird-ts/issues/42) [#37](https://github.com/omermorad/mockingbird-ts/issues/37) [#46](https://github.com/omermorad/mockingbird-ts/issues/46) [#47](https://github.com/omermorad/mockingbird-ts/issues/47) [#49](https://github.com/omermorad/mockingbird-ts/issues/49) [#50](https://github.com/omermorad/mockingbird-ts/issues/50) [#52](https://github.com/omermorad/mockingbird-ts/issues/52) [#54](https://github.com/omermorad/mockingbird-ts/issues/54) [#42](https://github.com/omermorad/mockingbird-ts/issues/42) [#55](https://github.com/omermorad/mockingbird-ts/issues/55) [#42](https://github.com/omermorad/mockingbird-ts/issues/42) [#56](https://github.com/omermorad/mockingbird-ts/issues/56) [#57](https://github.com/omermorad/mockingbird-ts/issues/57) [#58](https://github.com/omermorad/mockingbird-ts/issues/58) [#59](https://github.com/omermorad/mockingbird-ts/issues/59) [#60](https://github.com/omermorad/mockingbird-ts/issues/60) [#42](https://github.com/omermorad/mockingbird-ts/issues/42) [#61](https://github.com/omermorad/mockingbird-ts/issues/61) [#62](https://github.com/omermorad/mockingbird-ts/issues/62) [#64](https://github.com/omermorad/mockingbird-ts/issues/64) [#63](https://github.com/omermorad/mockingbird-ts/issues/63) [#67](https://github.com/omermorad/mockingbird-ts/issues/67) [#68](https://github.com/omermorad/mockingbird-ts/issues/68)


### BREAKING CHANGES

* **release:** MockFactory is now an instance (TClass) and not ClassLiteral<TClass>

* chore: fix typo in the test name

* chore: change methods order

* chore: added source map and some jest configs

* refactor: change some var names and error

* test(class-processor): refactor test turning into integration instead of unit

* chore(lib): move files into lib folder and change imports

* feat(fluent-api): add fluent api (builder) functionality and persistence

Add fluent API to enable methods chaining with ability to persist the mock
* **release:** MockFactory is now a function and not a class, changed the original to
MockGenerator. Add fluent API and ability to persist mock data
* **release:** MockFactory changed to be MockGenerator
* **release:** MockFactory changed to be MockGenerator
* **release:** MockGenerator is not exported anymore, use MockFactory instead





# [2.0.0-alpha.2](https://github.com/omermorad/mockingbird-ts/compare/@mockinbird/types@2.0.0-alpha.1...@mockinbird/types@2.0.0-alpha.2) (2021-07-23)


### Bug Fixes

* **types:** change the values inside 'files' array in package.json ([a858cb4](https://github.com/omermorad/mockingbird-ts/commit/a858cb47ef8e80d87686724d4125bd213a77ecad))





# 2.0.0-alpha.1 (2021-07-23)


### Bug Fixes

* **types:** add build to export a js file to include the faker instance (for runtime) ([#61](https://github.com/omermorad/mockingbird-ts/issues/61)) ([f4e3092](https://github.com/omermorad/mockingbird-ts/commit/f4e3092e683eb9c288d4e879113e71f74ec5038a))


### Features

* **mockingbird-ts:** add mock factory fluent/builder api ([#60](https://github.com/omermorad/mockingbird-ts/issues/60)) ([cc5710d](https://github.com/omermorad/mockingbird-ts/commit/cc5710ded33401cae25782bb8e87efe1355024aa)), closes [#42](https://github.com/omermorad/mockingbird-ts/issues/42)


### Reverts

* **repo:** release packages ([7f9390d](https://github.com/omermorad/mockingbird-ts/commit/7f9390d051f9c9c9c3eb172f4db8a9fe533b03c4))


### BREAKING CHANGES

* **mockingbird-ts:** MockGenerator is not exported anymore, use MockFactory instead





# Change Log
# [2.0.0-alpha.0](https://github.com/omermorad/mockingbird-ts/compare/@mockinbird/types@2.0.0...@mockinbird/types@2.0.0-alpha.0) (2021-07-22)

### Features

* **mockingbird-ts:** add mock factory fluent/builder api ([#60](https://github.com/omermorad/mockingbird-ts/issues/60)) ([cc5710d](https://github.com/omermorad/mockingbird-ts/commit/cc5710ded33401cae25782bb8e87efe1355024aa)), closes [#42](https://github.com/omermorad/mockingbird-ts/issues/42)


### Reverts

* **repo:** release packages ([7f9390d](https://github.com/omermorad/mockingbird-ts/commit/7f9390d051f9c9c9c3eb172f4db8a9fe533b03c4))


### BREAKING CHANGES

* **mockingbird-ts:** MockGenerator is not exported anymore, use MockFactory instead
