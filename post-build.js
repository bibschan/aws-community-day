const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running post-build script...');

// Clean up any existing archive directory
const archiveDir = path.join(process.cwd(), 'public/archive-2024');
if (fs.existsSync(archiveDir)) {
  fs.rmSync(archiveDir, { recursive: true, force: true });
}

// Create a fresh archive directory
fs.mkdirSync(archiveDir, { recursive: true });

try {
  // Copy all files from out/ to public/archive-2024/, excluding the archive-2024 directory if it exists in out/
  execSync(`rsync -a --exclude='archive-2024' out/ ${archiveDir}/`);
  console.log('Copied static build to public/archive-2024');
  
  // Update asset paths in the copied files
  const updateFilePaths = (filePath) => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content
        .replace(/(src|href)="\/([^"\/])/g, '$1="/archive-2024/$2')
        .replace(/url\(\s*'?\/?(\/_next\/static)/g, 'url(/archive-2024$1')
        .replace(/(\/static\/)/g, '/archive-2024$1');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated paths in ${filePath}`);
    } catch (err) {
      console.error(`Error updating ${filePath}:`, err.message);
    }
  };
  
  // Update paths in HTML files
  const htmlFiles = ['index.html', '404.html'];
  htmlFiles.forEach(file => {
    const filePath = path.join(archiveDir, file);
    if (fs.existsSync(filePath)) {
      updateFilePaths(filePath);
    }
  });
  
  // Update _next/static files
  const staticDir = path.join(archiveDir, '_next/static');
  if (fs.existsSync(staticDir)) {
    const files = [];
    
    const walkDir = (dir) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walkDir(fullPath);
        } else if (entry.isFile() && 
                  (entry.name.endsWith('.js') || 
                   entry.name.endsWith('.css') ||
                   entry.name.endsWith('.html'))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(staticDir);
    
    // Update paths in all static files
    files.forEach(file => {
      updateFilePaths(file);
    });
  }
  
  console.log('Successfully prepared archive in public/archive-2024');
} catch (error) {
  console.error('Error in post-build script:', error.message);
  process.exit(1);
}
