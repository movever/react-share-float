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

function checkPackage(packagePath, packageName) {
  log(`\n📦 Checking ${packageName}...`, 'blue');
  
  const packageJsonPath = path.join(packagePath, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // 检查基本配置
  log(`   Name: ${packageJson.name}`, 'yellow');
  log(`   Version: ${packageJson.version}`, 'yellow');
  log(`   Main: ${packageJson.main}`, 'yellow');
  log(`   Module: ${packageJson.module}`, 'yellow');
  
  // 检查是否有TypeScript配置
  if (packageJson.types) {
    log(`   ❌ Types field found: ${packageJson.types}`, 'red');
    log(`   ⚠️  This is a JavaScript project, types field should be removed`, 'yellow');
  } else {
    log(`   ✅ No types field (correct for JavaScript)`, 'green');
  }
  
  // 检查private字段
  if (packageJson.private) {
    log(`   ❌ Private field found: ${packageJson.private}`, 'red');
    log(`   ⚠️  This package should be public for publishing`, 'yellow');
  } else {
    log(`   ✅ No private field (correct for publishing)`, 'green');
  }
  
  // 检查构建输出
  const distPath = path.join(packagePath, 'dist');
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    log(`   📁 Dist files: ${files.join(', ')}`, 'yellow');
    
    // 检查是否有TypeScript文件
    const tsFiles = files.filter(file => file.endsWith('.d.ts'));
    if (tsFiles.length > 0) {
      log(`   ❌ TypeScript files found: ${tsFiles.join(', ')}`, 'red');
    } else {
      log(`   ✅ No TypeScript files (correct for JavaScript)`, 'green');
    }
  } else {
    log(`   ❌ Dist directory not found`, 'red');
  }
  
  return {
    hasTypes: !!packageJson.types,
    isPrivate: !!packageJson.private,
    hasTsFiles: fs.existsSync(distPath) && fs.readdirSync(distPath).some(f => f.endsWith('.d.ts'))
  };
}

function main() {
  log('🔍 Package Verification', 'blue');
  
  const utilsCheck = checkPackage('./packages/utils', 'react-share-float-utils');
  const mainCheck = checkPackage('./packages/react-share-float', 'react-share-float');
  
  // 总结
  log('\n📊 Verification Summary:', 'blue');
  
  const issues = [];
  if (utilsCheck.hasTypes) issues.push('utils package has types field');
  if (utilsCheck.isPrivate) issues.push('utils package is private');
  if (utilsCheck.hasTsFiles) issues.push('utils package has TypeScript files');
  if (mainCheck.hasTypes) issues.push('main package has types field');
  if (mainCheck.isPrivate) issues.push('main package is private');
  if (mainCheck.hasTsFiles) issues.push('main package has TypeScript files');
  
  if (issues.length === 0) {
    log('🎉 All packages are correctly configured for JavaScript!', 'green');
  } else {
    log('❌ Issues found:', 'red');
    issues.forEach(issue => log(`   - ${issue}`, 'red'));
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkPackage };
