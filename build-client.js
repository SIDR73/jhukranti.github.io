import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Build the client using Vite
console.log('Building client...');
execSync('npx vite build', { 
  cwd: join(process.cwd(), 'client'),
  stdio: 'inherit' 
});

// Copy build files to root dist directory
console.log('Copying build files...');
const clientDistDir = join(process.cwd(), 'client', 'dist');
const rootDistDir = join(process.cwd(), 'dist');

// Create root dist directory if it doesn't exist
if (!existsSync(rootDistDir)) {
  mkdirSync(rootDistDir, { recursive: true });
}

// Copy all files from client/dist to root dist
execSync(`cp -r ${clientDistDir}/* ${rootDistDir}/`, { stdio: 'inherit' });

// Verify the build files exist
console.log('Verifying build files...');
if (existsSync(join(rootDistDir, 'index.html'))) {
  console.log('✅ index.html found');
} else {
  console.log('❌ index.html missing');
}

console.log('Build complete!'); 