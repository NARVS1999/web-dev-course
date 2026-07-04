//!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../teach/lessons');
const assetsDir = path.join(__dirname, '../teach/assets');

// Read lessons-data.js as text, extract JSON part
const lessonsDataPath = path.join(assetsDir, 'lessons-data.js');
const lessonsDataRaw = fs.readFileSync(lessonsDataPath, 'utf8');

// Read the file and extract the JSON part (starting with window.LESSONS)
let lessonsData = [];
try {
  const fullContent = lessonsDataRaw.trim();
  
  // Find the beginning of the array
  const startIndex = fullContent.indexOf('window.LESSONS = [');
  if (startIndex === -1) {
    console.error('Could not find window.LESSONS in lessons-data.js');
    process.exit(1);
  }
  
  // Find the end of the array
  const closingBracketIndex = fullContent.indexOf('];', startIndex);
  if (closingBracketIndex === -1) {
    console.error('Could not find end of window.LESSONS array');
    process.exit(1);
  }
  
  // Extract the array content (including the brackets)
  const arrayContent = fullContent.substring(startIndex, closingBracketIndex + 2);
  
  // Remove the "window.LESSONS = " prefix
  const jsonString = arrayContent.substring(18); // Remove 'window.LESSONS = '
  
  // Fix trailing commas in the JSON
  const fixedJson = jsonString.replace(/,}\s*]/g, '}];');
  
  // Parse the JSON
  const parsedData = JSON.parse(fixedJson);
  
  // The parsed data should be an array
  lessonsData = Array.isArray(parsedData) ? parsedData : [];
  
  console.log(`Successfully parsed lessons-data.js (${lessonsData.length} lessons)`);
} catch (error) {
  console.error('Error parsing lessons-data.js:', error.message);
  process.exit(1);
}

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

  const content = fs.readFileSync(filePath, 'utf8');

  // Check if navigation scripts already exist
  if (content.includes('sidebar.js') && content.includes('lesson-nav.js')) {
    console.log(`✓ ${lesson.file} - already has nav scripts`);
    skippedCount++;
    continue;
  }

  // Inject both sidebar.js and lesson-nav.js scripts
  const themeScript = '<script>if(localStorage.getItem("theme")===\"dark\")document.documentElement.setAttribute("data-theme","dark");<\/script>'
  const sidebarScript = '<script src="../assets/lesson-utils.js"><\/script>'
  const navScript = '<script src="../assets/lesson-nav.js"><\/script>'

  // Insert scripts after opening <head> tag
  const updatedContent = content.replace(
    /<head>/,
    `<head>\n${themeScript}\n${sidebarScript}\n${navScript}`
  );

  if (updatedContent !== content) {
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
