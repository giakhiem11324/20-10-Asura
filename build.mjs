import { cpSync, copyFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'dist');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
copyFileSync(resolve(root, 'index.html'), resolve(output, 'index.html'));
for (const directory of ['assets', 'css', 'js']) {
  cpSync(resolve(root, directory), resolve(output, directory), { recursive: true });
}
console.log('Static site copied to dist/.');
