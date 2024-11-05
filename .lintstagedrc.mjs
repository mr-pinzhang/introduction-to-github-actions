import path from 'node:path';

/** @type {import('lint-staged').ConfigFn} */
function buildEslintCommand(filenames) {
  return `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;
}

/** @type {import('lint-staged').Config} */
const lintStagedConfig = {
  '*.{css,html,json,md,sass,scss}': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', buildEslintCommand],
};

export default lintStagedConfig;
