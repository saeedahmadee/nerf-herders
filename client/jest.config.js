module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  testMatch: ['<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)|<rootDir>/**/__tests__/*.(js|jsx|ts|tsx)']
};
