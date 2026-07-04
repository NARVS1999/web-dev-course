#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../teach/lessons');
const assetsDir = path.join(__dirname, '../teach/assets');
const themeScript = `<script>if(localStorage.getItem("theme")===\"dark\")document.documentElement.setAttribute("data-theme","dark");<\/script>\n`;

// Read lessons-data.js to get all lesson files
const lessonsDataPath = path.join(assetsDir, 'lessons-data.js');
const lessonsDataContent = fs.readFileSync(lessonsDataPath, 'utf8');

// Extract lesson file paths from lessons-data.js
const filePaths = lessonsDataContent.match(/file:\s*['\"]([^'\"]+)['\"]/g)
  .map(match => match.replace(/file:\s*['\"]/, '').replace(/['\"]$/, ''));

console.log(`Found ${filePaths.length} lesson files`);

// Process each lesson file
let updatedCount = 0;
let skippedCount = 0;

for (const filePath of filePaths) {
  const fullPath = path.join(lessonsDir, filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    skippedCount++;
    continue;
  }

  const content = fs.readFileSync(fullPath, 'utf8');

  // Check if theme script already exists
  if (content.includes('if(localStorage.getItem("theme")===')) {
    console.log(`✓ ${filePath} - already has theme script`);
    skippedCount++;
    continue;
  }

  // Insert theme script after opening <head> tag
  const updatedContent = content.replace(
    /<head>/,
    `<head>\n${themeScript}`
  );

  if (updatedContent !== content) {
    fs.writeFileSync(fullPath, updatedContent, 'utf8');
    console.log(`✓ ${filePath} - theme script injected`);
    updatedCount++;
  } else {
    console.log(`⚠️  ${filePath} - no changes made`);
    skippedCount++;
  }
}

console.log(`\n=== Summary ===`);
console.log(`Updated: ${updatedCount} files`);
console.log(`Skipped: ${skippedCount} files`);
console.log(`Total: ${filePaths.length} files`);
