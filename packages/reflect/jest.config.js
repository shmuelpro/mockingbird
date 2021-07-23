const base = require('../../jest.config.base');
const packageJson = require('./package');

module.exports = {
  ...base,
  name: packageJson.name,
  displayName: packageJson.name,
  collectCoverageFrom: ['src/**/*.ts', 'test/**/*.test.js'],
  coveragePathIgnorePatterns: ['index.ts'],
};