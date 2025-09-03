#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

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

function main() {
  log('🚀 Quick Publish Script', 'blue');
  
  // 1. 检查NPM登录状态
  log('\n1. Checking NPM login status...', 'blue');
  try {
    execSync('npm whoami', { stdio: 'pipe' });
    log('✅ NPM logged in', 'green');
  } catch (error) {
    log('❌ Please login to NPM first:', 'red');
    log('   npm login', 'yellow');
    process.exit(1);
  }
  
  // 2. 构建项目
  log('\n2. Building packages...', 'blue');
  exec('npm run build');
  log('✅ Build completed', 'green');
  
  // 3. 测试构建
  log('\n3. Testing build outputs...', 'blue');
  exec('npm run test:build');
  log('✅ Build test passed', 'green');
  
  // 4. 检查包名可用性
  log('\n4. Checking package name availability...', 'blue');
  try {
    execSync('npm view react-share-float', { stdio: 'pipe' });
    log('❌ Package name already exists', 'red');
    process.exit(1);
  } catch (error) {
    log('✅ Package name available', 'green');
  }
  
  // 5. 发布包
  log('\n5. Publishing packages...', 'blue');
  exec('npm run publish:all');
  log('✅ Packages published successfully!', 'green');
  
  log('\n🎉 All done! Your packages are now available on NPM.', 'green');
  log('\n📦 Package URLs:', 'blue');
  log('   https://www.npmjs.com/package/react-share-float', 'yellow');
  log('   https://www.npmjs.com/package/@react-share-float/utils', 'yellow');
}

if (require.main === module) {
  main();
}

module.exports = { main };
