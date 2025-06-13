#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting static build...');

// Clean previous builds
try {
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }
  if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true, force: true });
  }
} catch (error) {
  console.log('Clean up completed');
}

// Set environment variables
process.env.NODE_ENV = 'production';
process.env.NEXT_TELEMETRY_DISABLED = '1';

// Run Next.js build
try {
  console.log('📦 Building with Next.js...');
  execSync('npx next build', { 
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  console.log('✅ Static build completed successfully!');
  
  // Verify out directory exists
  if (fs.existsSync('out')) {
    console.log('📁 Output directory created successfully');
  } else {
    throw new Error('Output directory not found');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 