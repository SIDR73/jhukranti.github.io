import { execSync } from 'child_process';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Build the client
console.log('Building client...');
execSync('npm run build', { stdio: 'inherit' });

// Copy static assets to the build directory
console.log('Copying static assets...');
const publicDir = join(process.cwd(), 'client', 'public');
const distDir = join(process.cwd(), 'dist', 'public');

// Copy photos directory
execSync(`cp -r ${join(publicDir, 'photos')} ${distDir}/`, { stdio: 'inherit' });

console.log('Build complete!'); 