# wldzs-ui

![npm](https://img.shields.io/npm/v/wldzs-ui?style=flat-square)
![license](https://img.shields.io/github/license/weilengdezaoshang/wldzs-ui?style=flat-square)

一个轻量、高效的 React 组件库，支持按需加载和主题定制。

## ✨ 特性

- 🚀 支持 ESModule、CommonJS 和 UMD 三种模块格式
- 🎯 自动按需加载（基于 babel-plugin-import）
- 📦 开箱即用的组件文档系统（基于 dumi）
- 🛠 完善的开发工具链（ESLint + Stylelint + Prettier）
- 🌈 渐进式主题定制能力

## 📦 安装

```bash
# npm
npm install wldzs-ui --save

# yarn
yarn add wldzs-ui
```

## 🔨 使用

### 完整引入

```typescript
import { createRoot } from 'react-dom/client';
import WldzsUI from 'wldzs-ui';
import 'wldzs-ui/dist/esm/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<WldzsUI.Button>Hello</WldzsUI.Button>);
```

### 按需加载（推荐）

配置 babel-plugin-import：

```js
// .babelrc 或 babel.config.js
{
  "plugins": [
    ["import", {
      "libraryName": "wldzs-ui",
      "libraryDirectory": "esm",
      "style": true
    }]
  ]
}
```

### UMD 使用

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/wldzs-ui/dist/umd/index.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const { Button } = WldzsUI;
      ReactDOM.createRoot(document.getElementById('root')).render(
        React.createElement(Button, { type: 'primary' }, 'UMD Button'),
      );
    </script>
  </body>
</html>
```

## 📖 文档

### 本地开发

```bash
npm run dev
```

### 构建文档

```bash
npm run docs:build
```

## 🛠 开发指南

### 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建组件库
npm run build

# 运行测试
npm test

# 代码规范检查
npm run lint

# 部署文档
npm run deploy
```

### 目录结构

```
src/
├─ Button/       # 按钮组件
│  ├─ index.tsx  # 组件入口
│  ├─ style/     # 样式文件
│  └─ demo/      # 组件示例
```

## 🌍 浏览器支持

现代浏览器（Chrome ≥ 90, Edge ≥ 90, Firefox ≥ 100, Safari ≥ 15）

## 🤝 参与贡献

1. Fork 仓库
2. 创建特性分支 (`git checkout -b feat/your-feature`)
3. 提交修改 (`git commit -am 'feat: add some feature'`)
4. 推送分支 (`git push origin feat/your-feature`)
5. 创建 Pull Request

## 📄 许可证

[MIT](https://github.com/weilengdezaoshang/wldzs-ui/blob/master/LICENSE)
