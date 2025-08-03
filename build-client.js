import { execSync } from 'child_process';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Build the client using Vite
console.log('Building client...');
execSync('npx vite build', { 
  cwd: join(process.cwd(), 'client'),
  stdio: 'inherit' 
});

// Copy static assets to the build directory
console.log('Copying static assets...');
const publicDir = join(process.cwd(), 'client', 'public');
const distDir = join(process.cwd(), 'dist', 'public');

// Copy photos directory
execSync(`cp -r ${join(publicDir, 'photos')} ${distDir}/`, { stdio: 'inherit' });

console.log('Build complete!'); 