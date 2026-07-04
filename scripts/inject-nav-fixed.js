//!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../teach/lessons');
const assetsDir = path.join(__dirname, '../teach/assets');

// Simple regex to extract the array content from lessons-data.js
const lessonsDataPath = path.join(assetsDir, 'lessons-data.js');
const content = fs.readFileSync(lessonsDataPath, 'utf8');

// Extract JSON array from the file
const arrayMatch = content.match(/window\.LESSONS\s*=\s*\[(.*?)\];/s);
if (!arrayMatch) {
  console.error('Could not find window.LESSONS array in lessons-data.js');
  process.exit(1);
}

// Parse the array using eval (carefully) - this is safer than trying to manually parse
const jsonString = '[{' + arrayMatch[1].replace(/}\s*{/g, '}, {') + '}]';
const lessonsData = JSON.parse(jsonString);

console.log(`Found ${lessonsData.length} lesson files`);

// Process each lesson file
let updatedCount = 0;
let skippedCount = 0;

for (const lesson of lessonsData) {
  const filePath = path.join(lessonsDir, lesson.file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${lesson.file}`);
    skippedCount++;
    continue;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Check if navigation scripts already exist
  if (fileContent.includes('sidebar.js') && fileContent.includes('lesson-nav.js')) {
    console.log(`✓ ${lesson.file} - already has nav scripts`);
    skippedCount++;
    continue;
  }

  // Inject both sidebar.js and lesson-nav.js scripts
  const themeScript = '<script>if(localStorage.getItem("theme")===\"dark\")document.documentElement.setAttribute("data-theme","dark");<\/script>'
  const sidebarScript = '<script src="../assets/lesson-utils.js"><\/script>'
  const navScript = '<script src="../assets/lesson-nav.js"><\/script>'

  // Insert scripts after opening <head> tag
  const updatedContent = fileContent.replace(
    /<head>/,
    `<head>\n${themeScript}\n${sidebarScript}\n${navScript}`
  );

  if (updatedContent !== fileContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✓ ${lesson.file} - nav scripts injected`);
    updatedCount++;
  } else {
    console.log(`⚠️  ${lesson.file} - no changes made`);
    skippedCount++;
  }
}

console.log(`\n=== Summary ===`);
console.log(`Updated: ${updatedCount} files`);
console.log(`Skipped: ${skippedCount} files`);
console.log(`Total: ${lessonsData.length} files`);