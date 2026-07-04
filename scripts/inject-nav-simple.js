#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../teach/lessons');
const assetsDir = path.join(__dirname, '../teach/assets');

// Read the existing lessons-data.js and extract data manually
const lessonsDataPath = path.join(assetsDir, 'lessons-data.js');
const content = fs.readFileSync(lessonsDataPath, 'utf8');

// Simple extraction - just find the lines that look like lesson entries
let lessons = [];

// Extract the array lines between "window.LESSONS = [" and "]"
const lines = content.split('\n');
let inArray = false;

for (const line of lines) {
  if (line.trim().startsWith('{ id: ')) {
    const lineContent = line.trim();
    
    // Extract id
    const idMatch = lineContent.match(/id:\s*'([^']+)'/);
    // Extract title
    const titleMatch = lineContent.match(/title:\s*'([^']+)'/);
    // Extract file
    const fileMatch = lineContent.match(/file:\s*'([^']+)'/);
    
    if (idMatch && titleMatch && fileMatch) {
      lessons.push({
        id: idMatch[1],
        title: titleMatch[1],
        file: fileMatch[1],
        status: 'completed' // Default status
      });
    }
  }
}

// Fallback: if extraction failed, use hardcoded data
defineLessonsData();
function defineLessonsData() {
  if (lessons.length === 0) {
    console.log('Using hardcoded lesson data as fallback');
    lessons = [
      { id: '0001', title: 'HTML Foundations', file: '0001-html-foundations.html', status: 'completed' },
      { id: '0002', title: 'CSS Styling', file: '0002-css-styling.html', status: 'completed' },
      { id: '0003', title: 'JavaScript Essentials', file: '0003-javascript-essentials.html', status: 'completed' },
      { id: '0004', title: 'Git & GitHub', file: '0004-git-and-github.html', status: 'completed' },
      { id: '0005', title: 'MySQL & Database Basics', file: '0005-mysql-database-basics.html', status: 'completed' },
      { id: '0006', title: 'Laravel Setup & Routing', file: '0006-laravel-setup-routing-controllers.html', status: 'completed' },
      { id: '0007', title: 'Migrations & Eloquent ORM', file: '0007-laravel-migrations-eloquent-crud.html', status: 'completed' },
      { id: '0008', title: 'Relationships & Auth', file: '0008-laravel-relationships-authentication.html', status: 'completed' },
      { id: '0009', title: 'API Resources & JSON', file: '0009-api-resources-json.html', status: 'completed' },
      { id: '0010', title: 'File Uploads & Storage', file: '0010-file-uploads-storage.html', status: 'completed' },
      { id: '0011', title: 'Next.js Foundations', file: '0011-nextjs-foundations.html', status: 'completed' },
      { id: '0012', title: 'Next.js Data Fetching', file: '0012-nextjs-data-fetching.html', status: 'completed' },
      { id: '0013', title: 'Next.js API Routes', file: '0013-nextjs-api-routes.html', status: 'completed' },
      { id: '0014', title: 'Next.js Deployment', file: '0014-nextjs-deployment.html', status: 'completed' },
      { id: '0015', title: 'React Native Basics', file: '0015-react-native-basics.html', status: 'completed' },
      { id: '0016', title: 'React Native Navigation', file: '0016-react-native-navigation.html', status: 'completed' },
      { id: '0017', title: 'React Native API Integration', file: '0017-react-native-api-integration.html', status: 'completed' },
      { id: '0018', title: 'Deployment & Portfolio', file: '0018-deployment-portfolio.html', status: 'completed' },
      { id: '0019', title: 'Final Project', file: '0019-final-project.html', status: 'completed' },
      { id: '0020', title: 'Freelancing Guide', file: '0020-freelancing-guide.html', status: 'completed' }
    ];
  }
}

console.log(`Found ${lessons.length} lesson files`);

// Process each lesson file
let updatedCount = 0;
let skippedCount = 0;

for (const lesson of lessons) {
  const filePath = path.join(lessonsDir, lesson.file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${lesson.file}`);
    skippedCount++;
    continue;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Check if navigation scripts already exist
  if (fileContent.includes('lesson-utils.js') && fileContent.includes('lesson-nav.js')) {
    console.log(`✓ ${lesson.file} - already has nav scripts`);
    skippedCount++;
    continue;
  }

  // Inject both lesson-utils.js and lesson-nav.js scripts
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
console.log(`Total: ${lessons.length} files`);
