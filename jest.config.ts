import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { type Config } from 'jest';
import nextJest from 'next/jest.js';
import { pathsToModuleNameMapper } from 'ts-jest';

import tsconfig from './tsconfig.json' with { type: 'json' };

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseDir = path.join(__dirname, tsconfig.compilerOptions.baseUrl);

const createJestConfig = nextJest({ dir: baseDir });

const config: Config = {
  clearMocks: true,
  coverageDirectory: path.join(__dirname, 'coverage'),
  coverageProvider: 'v8',
  coverageReporters: ['lcov', 'json', 'text'],
  errorOnDeprecated: true,
  moduleNameMapper: { ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths) },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  testEnvironment: 'jsdom',
};

export default createJestConfig(config);
