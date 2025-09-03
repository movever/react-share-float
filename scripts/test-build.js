#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 颜色输出
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath, description) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    log(`✅ ${description}: ${filePath} (${(stats.size / 1024).toFixed(2)} KB)`, 'green');
    return true;
  } else {
    log(`❌ ${description}: ${filePath} - File not found`, 'red');
    return false;
  }
}

function checkPackageJson(packagePath, packageName) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    log(`📦 ${packageName}:`, 'blue');
    log(`   Name: ${packageJson.name}`, 'yellow');
    log(`   Version: ${packageJson.version}`, 'yellow');
    log(`   Main: ${packageJson.main}`, 'yellow');
    log(`   Module: ${packageJson.module}`, 'yellow');
    return true;
  } else {
    log(`❌ Package.json not found: ${packageJsonPath}`, 'red');
    return false;
  }
}

function main() {
  log('🧪 Testing build outputs...', 'blue');
  
  // 检查utils包
  log('\n📁 Checking utils package...', 'blue');
  const utilsDistPath = './packages/utils/dist';
  const utilsExists = checkFileExists(path.join(utilsDistPath, 'index.js'), 'Utils CJS build');
  const utilsEsExists = checkFileExists(path.join(utilsDistPath, 'index.es'), 'Utils ESM build');
  checkPackageJson('./packages/utils', '@react-share-float/utils');
  
  // 检查react-share-float包
  log('\n📁 Checking react-share-float package...', 'blue');
  const mainDistPath = './packages/react-share-float/dist';
  const mainExists = checkFileExists(path.join(mainDistPath, 'index.js'), 'Main CJS build');
  const mainEsExists = checkFileExists(path.join(mainDistPath, 'index.es'), 'Main ESM build');
  checkPackageJson('./packages/react-share-float', 'react-share-float');
  
  // 检查demo应用
  log('\n📁 Checking demo application...', 'blue');
  const demoExists = fs.existsSync('./apps/demo');
  if (demoExists) {
    log('✅ Demo application exists', 'green');
    checkPackageJson('./apps/demo', 'react-share-float-demo');
  } else {
    log('❌ Demo application not found', 'red');
  }
  
  // 总结
  log('\n📊 Build Test Summary:', 'blue');
  if (utilsExists && utilsEsExists && mainExists && mainEsExists && demoExists) {
    log('🎉 All build outputs are present and ready for publishing!', 'green');
  } else {
    log('⚠️  Some build outputs are missing. Please run "npm run build" first.', 'yellow');
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkFileExists, checkPackageJson };
