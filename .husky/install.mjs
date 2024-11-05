if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
  process.exit(0);
}

const husky = (await import('husky')).default;
const path = await import('node:path');
const url = await import('node:url');

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
console.log(husky(path.join(__dirname, './')));
