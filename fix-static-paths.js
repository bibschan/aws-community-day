const fs = require('fs');
const path = require('path');

const archiveDir = path.join(__dirname, 'public/archive-2024');

// Files to update
const filesToUpdate = [
  'index.html',
  '404.html',
  '_next/static/css/*.css',
  '_next/static/chunks/*.js',
  '_next/static/chunks/pages/*.js'
];

// Function to update file paths in a file
function updateFilePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update asset paths to be relative to the archive directory
    content = content
      .replace(/(src|href)="\/([^"\/])/g, '$1="/archive-2024/$2')
      .replace(/url\(\s*'?\/?(_next\/static)/g, 'url(/archive-2024/$1')
      .replace(/url\(\s*"\/?(_next\/static)/g, 'url(/archive-2024/$1')
      .replace(/(\/static\/)/g, '/archive-2024$1');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated paths in ${filePath}`);
  } catch (err) {
    console.error(`Error updating ${filePath}:`, err.message);
  }
}

// Process all files
function processFiles() {
  filesToUpdate.forEach(pattern => {
    const fullPattern = path.join(archiveDir, pattern);
    const files = require('glob').sync(fullPattern, { nodir: true });
    
    files.forEach(file => {
      updateFilePaths(file);
    });
  });
  
  console.log('Static asset paths have been updated!');
}

processFiles();
