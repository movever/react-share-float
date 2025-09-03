## react-share-float

基于 `react-share` 的前端浮动分享组件。

- 包名：`react-share-float`
- 入口：`packages/react-share-float`
- 开发文档与调试说明见 `dev.md`

### 安装

```bash
npm install react-share-float
# 或者
yarn add react-share-float
```

### 使用示例

```tsx
import React from 'react'
import { ReactShareFloat } from 'react-share-float'

export default function Page() {
  return (
    <div style={{ height: 1200 }}>
      <h1>Demo</h1>
      <ReactShareFloat />
    </div>
  )
}
```

### API

ReactShareFloat(props)

- `children?: React.ReactNode` 可选，自定义触发按钮或内容。不传时默认渲染一个 Button。

组件会固定在页面右下角（`position: fixed; right: 16; bottom: 16;`）。

更多开发与本地调试、发布流程请查看 `dev.md`。

# react-share-float
A floating share component built on top of react-share . Plug-and-play: just import it to add floating social share buttons (Twitter, Facebook, Reddit, and more) to your website.
