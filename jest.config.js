/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/packages/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  testEnvironment: "jsdom",
  collectCoverageFrom: ["packages/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["\\.stories\\.*", "\\index\\.*"],
};
