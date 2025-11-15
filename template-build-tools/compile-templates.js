#!/usr/bin/env node

const sass = require('sass');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const isClean = process.argv.includes('--clean');
const TEMPLATES_ROOT = isClean ? (process.argv[2] === '--clean' ? '..' : process.argv[2] || '..') : (process.argv[2] || '..');

/**
 * Compile SCSS to CSS
 */
async function compileSCSS(scssFile) {
  try {
    const result = sass.compile(scssFile, {
      style: 'compressed', // or 'expanded' for readable CSS
      sourceMap: false
    });

    // Output CSS file next to SCSS file
    const cssFile = scssFile.replace(/\.scss$/, '.css');
    fs.writeFileSync(cssFile, result.css);

    console.log(`✓ Compiled: ${scssFile} -> ${cssFile}`);
    return cssFile;
  } catch (error) {
    console.error(`✗ Error compiling ${scssFile}:`, error.message);
    return null;
  }
}

/**
 * Remove compiled CSS files
 */
async function cleanCSS() {
  const scssFiles = await glob(`${TEMPLATES_ROOT}/**/*.scss`, {
    ignore: ['**/node_modules/**', '**/dist/**']
  });

  let cleaned = 0;
  for (const scssFile of scssFiles) {
    const cssFile = scssFile.replace(/\.scss$/, '.css');
    if (fs.existsSync(cssFile)) {
      fs.unlinkSync(cssFile);
      console.log(`✓ Removed: ${cssFile}`);
      cleaned++;
    }
  }

  console.log(`\nCleaned ${cleaned} CSS files.`);
}

/**
 * Main build process
 */
async function build() {
  console.log(`\nCompiling SCSS templates in: ${path.resolve(TEMPLATES_ROOT)}\n`);

  if (isClean) {
    await cleanCSS();
    return;
  }

  // Find all SCSS files
  const scssFiles = await glob(`${TEMPLATES_ROOT}/**/*.scss`, {
    ignore: ['**/node_modules/**', '**/dist/**', '**/_*.scss'] // Ignore partials
  });

  if (scssFiles.length === 0) {
    console.log('No SCSS files found.');
    return;
  }

  console.log(`Found ${scssFiles.length} SCSS files to compile...\n`);

  let compiled = 0;
  let failed = 0;

  for (const scssFile of scssFiles) {
    const result = await compileSCSS(scssFile);
    if (result) {
      compiled++;
    } else {
      failed++;
    }
  }

  console.log(`\n✓ Compiled: ${compiled} files`);
  if (failed > 0) {
    console.log(`✗ Failed: ${failed} files`);
    process.exit(1);
  }
}

// Run
build().catch(error => {
  console.error('Build failed:', error);
  process.exit(1);
});
