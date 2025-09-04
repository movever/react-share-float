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
    return execSync(command, { stdio: 'pipe', ...options });
  } catch (error) {
    return false;
  }
}

function main() {
  log('🔍 Pre-publish Check', 'blue');
  
  let allChecksPassed = true;
  
  // 1. 检查NPM登录状态
  log('\n1. Checking NPM login status...', 'blue');
  if (exec('npm whoami')) {
    log('✅ NPM logged in', 'green');
  } else {
    log('❌ NPM not logged in', 'red');
    allChecksPassed = false;
  }
  
  // 2. 检查包名可用性
  log('\n2. Checking package name availability...', 'blue');
  
  if (!exec('npm view react-share-float')) {
    log('✅ react-share-float available', 'green');
  } else {
    log('❌ react-share-float already exists', 'red');
    allChecksPassed = false;
  }
  

  
  // 3. 检查构建状态
  log('\n3. Checking build status...', 'blue');
  if (fs.existsSync('packages/react-share-float/dist/index.js')) {
    log('✅ Build files exist', 'green');
  } else {
    log('❌ Build files missing', 'red');
    allChecksPassed = false;
  }
  
  // 4. 检查Git状态
  log('\n4. Checking Git status...', 'blue');
  const gitStatus = exec('git status --porcelain');
  if (!gitStatus) {
    log('✅ Git working directory clean', 'green');
  } else {
    log('⚠️  Uncommitted changes detected', 'yellow');
    log('   Consider: git add . && git commit -m "Prepare for release"', 'yellow');
  }
  
  // 总结
  log('\n📊 Check Summary:', 'blue');
  if (allChecksPassed) {
    log('🎉 All checks passed! Ready to publish.', 'green');
    log('\n🚀 Next steps:', 'blue');
    log('   1. npm run publish:all', 'yellow');
    log('   2. Or: npm run publish:quick', 'yellow');
  } else {
    log('❌ Some checks failed. Please fix issues before publishing.', 'red');
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
