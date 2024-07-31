/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.stories.tsx',
    '!src/assets/**',
    '!src/themes/**',
    '!src/types/**',
    '!src/mocks/**',
    '!src/constants/**',
    '!src/components/index.ts',
    '!src/utils/index.ts',
    '!src/stores/index.ts',
    '!src/services/index.ts',
    '!src/hooks/index.ts',
    '!src/providers/index.ts',
    '!src/apis/index.ts',
    '!src/actions/index.ts',
    '!src/sections/index.ts',
    '!src/app/robots.ts',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@components': '<rootDir>/src/components',
    '@constants': '<rootDir>/src/constants',
    '@themes': '<rootDir>/src/themes',
    '@providers': '<rootDir>/src/providers',
    '@assets': '<rootDir>/src/assets',
    '@utils': '<rootDir>/src/utils',
    '@mocks': '<rootDir>/src/mocks',
    '@services': '<rootDir>/src/services',
    '@apis': '<rootDir>/src/apis',
    '@hooks': '<rootDir>/src/hooks',
    '@stores': '<rootDir>/src/stores',
    '@sections': '<rootDir>/src/sections',
    '@actions': '<rootDir>/src/actions',
    '@components/*': '<rootDir>/src/components/*',
    '@sections/*': '<rootDir>/src/sections/*',
  },

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>/src'],
};

export default createJestConfig(config);
