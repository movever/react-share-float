#!/usr/bin/env node

const { execSync } = require('child_process');
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

function exec(command, options = {}) {
  try {
    return execSync(command, { stdio: 'inherit', ...options });
  } catch (error) {
    log(`Error executing: ${command}`, 'red');
    process.exit(1);
  }
}

function checkGitStatus() {
  log('Checking git status...', 'blue');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (status.trim()) {
    log('❌ Uncommitted changes detected. Please commit or stash your changes.', 'red');
    process.exit(1);
  }
  log('✅ Git status clean', 'green');
}

function build() {
  log('Building packages...', 'blue');
  exec('npm run build');
  log('✅ Build completed', 'green');
}

function publishPackage(packagePath, packageName) {
  log(`Publishing ${packageName}...`, 'blue');
  
  const packageJsonPath = path.join(packagePath, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  log(`Current version: ${packageJson.version}`, 'yellow');
  
  // 检查是否已经发布过这个版本
  try {
    const npmInfo = execSync(`npm view ${packageJson.name} version`, { encoding: 'utf8' });
    const publishedVersion = npmInfo.trim();
    
    if (publishedVersion === packageJson.version) {
      log(`⚠️  Version ${packageJson.version} already published. Skipping...`, 'yellow');
      return;
    }
  } catch (error) {
    // 包不存在，可以发布
  }
  
  // 发布包
  exec('npm publish', { cwd: packagePath });
  log(`✅ ${packageName} published successfully`, 'green');
}

function main() {
  log('🚀 Starting publish process...', 'blue');
  
  // 检查git状态
  checkGitStatus();
  
  // 构建所有包
  build();
  
  // 发布utils包
  publishPackage('./packages/utils', 'react-share-float-utils');
  
  // 发布主包
  publishPackage('./packages/react-share-float', 'react-share-float');
  
  log('🎉 All packages published successfully!', 'green');
}

if (require.main === module) {
  main();
}

module.exports = { main, publishPackage, build, checkGitStatus };
