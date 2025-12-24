import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigNextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigNextTypescript from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  {
    ignores: [
      ...includeIgnoreFile(path.join(__dirname, '.gitignore')).ignores,
      // Add any additional patterns here
    ],
  },

  globalIgnores(['.yarn']),

  ...eslintConfigNextCoreWebVitals,

  ...eslintConfigNextTypescript,

  eslintConfigPrettier,
]);
