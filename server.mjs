import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, resolve, sep } from 'node:path';

const preview = process.argv.includes('--preview');
const root = resolve(process.cwd(), preview ? 'dist' : '.');
const contentTypes = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.webm': 'video/webm'
};

createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { response.writeHead(400).end('Bad request'); return; }
  if (pathname === '/') pathname = '/index.html';
  const file = resolve(root, `.${pathname}`);
  if (file !== root && !file.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end('Forbidden'); return;
  }
  if (!existsSync(file) || !statSync(file).isFile()) {
    response.writeHead(404).end('Not found'); return;
  }
  response.writeHead(200, { 'Content-Type': contentTypes[extname(file).toLowerCase()] || 'application/octet-stream' });
  response.end(readFileSync(file));
}).listen(Number(process.env.PORT || 3000), '0.0.0.0', () => {
  console.log(`Tiny is available at http://localhost:${process.env.PORT || 3000}`);
});
