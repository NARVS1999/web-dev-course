//!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../teach/lessons');
const assetsDir = path.join(__dirname, '../teach/assets');

// Read lessons-data.js
const lessonsDataPath = path.join(assetsDir, 'lessons-data.js');
const content = fs.readFileSync(lessonsDataPath, 'utf8');

// Find the array definition more reliably
const lines = content.split('\n');
let inArray = false;
let arrayLines = [];
let braceCount = 0;
let startIndex = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('window.LESSONS = [')) {
    startIndex = i;
    inArray = true;
    braceCount = 1;
    arrayLines.push(line);
  } else if (inArray) {
    arrayLines.push(line);
    braceCount += (line.match(/\{/g) || []).length;
    braceCount -= (line.match(/\}/g) || []).length;
    if (braceCount === 0 && line.includes('];')) {
      inArray = false;
      break;
    }
  }
}

if (startIndex === -1) {
  console.error('Could not find window.LESSONS array');
  process.exit(1);
}

// Build the array string
const arrayString = arrayLines.join('\n');

// Parse the JSON using JSON.parse
let lessonsData;
try {
  // Remove the "window.LESSONS = " prefix
  const jsonString = '[' + arrayString.substring(arrayString.indexOf('[') + 1, arrayString.lastIndexOf(']')) + ']';
  lessonsData = JSON.parse(jsonString);
  console.log(`Found ${lessonsData.length} lesson files`);
} catch (error) {
  console.error('Error parsing lessons-data.js:', error.message);
  console.error('Attempted to parse:', arrayString.substring(0, 500));
  process.exit(1);
}

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
