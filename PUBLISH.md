# React Share Float - 发布指南

## 📦 发布到NPM的完整流程

### 1. 准备工作

#### 1.1 检查构建状态
```bash
# 确保所有包都正确构建
npm run build

# 测试构建结果
npm run test:build
```

#### 1.2 检查Git状态
```bash
# 确保没有未提交的更改
git status

# 如果有更改，提交它们
git add .
git commit -m "Prepare for release v1.0.0"
```

#### 1.3 登录NPM
```bash
# 登录到NPM（如果还没有登录）
npm login

# 检查当前用户
npm whoami
```

### 2. 版本管理

#### 2.1 更新版本号
```bash
# 更新补丁版本 (1.0.0 -> 1.0.1)
npm version patch --workspace=packages/react-share-float

# 更新次要版本 (1.0.0 -> 1.1.0)
npm version minor --workspace=packages/react-share-float

# 更新主要版本 (1.0.0 -> 2.0.0)
npm version major --workspace=packages/react-share-float
```

#### 2.2 同时更新utils包版本
```bash
# 更新utils包版本
npm version patch --workspace=packages/utils
```

### 3. 发布流程

#### 3.1 使用自动化脚本发布
```bash
# 发布所有包
npm run publish:all
```

#### 3.2 手动发布（如果需要）
```bash
# 发布utils包
cd packages/utils
npm publish

# 发布主包
cd ../react-share-float
npm publish
```

### 4. 发布后验证

#### 4.1 检查NPM包
```bash
# 查看包信息
npm view react-share-float
npm view react-share-float-utils

# 查看版本历史
npm view react-share-float versions
```

#### 4.2 测试安装
```bash
# 创建测试目录
mkdir test-install
cd test-install

# 安装包
npm install react-share-float

# 测试导入
node -e "console.log(require('react-share-float'))"
```

### 5. 发布检查清单

#### 5.1 发布前检查
- [ ] 所有测试通过
- [ ] 构建成功
- [ ] 版本号已更新
- [ ] 文档已更新
- [ ] Git状态干净
- [ ] NPM已登录

#### 5.2 发布后检查
- [ ] 包在NPM上可见
- [ ] 版本号正确
- [ ] 文件完整
- [ ] 安装测试通过

### 6. 常见问题

#### 6.1 包名冲突
如果包名已被占用，需要修改package.json中的name字段：
```json
{
  "name": "react-share-float-button"
}
```

#### 6.2 权限问题
```bash
# 检查NPM权限
npm access ls-packages

# 添加协作者
npm owner add username react-share-float
```

#### 6.3 发布失败
```bash
# 检查NPM状态
npm ping

# 清除NPM缓存
npm cache clean --force

# 重新登录
npm logout
npm login
```

### 7. 发布脚本详解

#### 7.1 自动化发布脚本
`scripts/publish.js` 包含以下功能：
- 检查Git状态
- 构建所有包
- 检查版本冲突
- 发布包到NPM
- 错误处理

#### 7.2 手动发布命令
```bash
# 发布特定包
npm run publish:utils
npm run publish:main

# 发布所有包
npm run publish:all
```

### 8. 版本策略

#### 8.1 语义化版本
- **主版本号** (1.0.0): 不兼容的API修改
- **次版本号** (1.1.0): 向下兼容的功能性新增
- **修订号** (1.0.1): 向下兼容的问题修正

#### 8.2 版本同步
- utils包和主包版本应该保持同步
- 使用相同的版本号便于管理

### 9. 发布最佳实践

#### 9.1 发布前
1. 在本地测试构建
2. 检查所有依赖
3. 更新README和文档
4. 提交所有更改

#### 9.2 发布时
1. 使用自动化脚本
2. 检查发布日志
3. 验证包内容

#### 9.3 发布后
1. 更新Git标签
2. 创建发布说明
3. 通知用户
4. 监控反馈

### 10. 回滚策略

#### 10.1 如果发布错误
```bash
# 取消发布（24小时内）
npm unpublish react-share-float@1.0.0

# 发布修正版本
npm version patch
npm publish
```

#### 10.2 版本回滚
```bash
# 回滚到特定版本
git checkout v1.0.0
npm publish
```

---

## 🚀 快速发布命令

```bash
# 一键发布（推荐）
npm run publish:all

# 分步发布
npm run build
npm run test:build
npm run publish:utils
npm run publish:main
```

## 📞 支持

如果遇到发布问题：
1. 检查NPM状态：https://status.npmjs.org/
2. 查看NPM文档：https://docs.npmjs.com/
3. 提交Issue到GitHub
