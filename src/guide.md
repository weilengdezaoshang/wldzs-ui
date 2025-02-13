# 开发指南

![npm](https://img.shields.io/npm/v/wldzs-ui.svg?style=flat-square)
![license](https://img.shields.io/github/license/weilengdezaoshang/wldzs-ui.svg?style=flat-square)

## 安装

### npm 安装（推荐）

```bash
npm install wldzs-ui --save
```

### yarn 安装

```bash
yarn add wldzs-ui
```

## 快速上手

### 完整引入

```typescript
import { createApp } from 'vue';
import CoolUI from 'wldzs-ui';
import 'cool-ui/dist/esm/index.css';

const app = createApp();
app.use(CoolUI);
```

### 按需引入

#### 自动按需加载（推荐）

通过 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现自动加载组件和样式：

```bash
npm install babel-plugin-import --save-dev
```

在 babel 配置中添加：

```js
plugins: [
  [
    'import',
    {
      libraryName: 'wldzs-ui',
      libraryDirectory: 'esm',
      style: true,
    },
  ],
];
```

### 构建产物说明

| 模块格式  | 路径             | 使用场景             |
| --------- | ---------------- | -------------------- |
| ES Module | cool-ui/dist/esm | 现代打包工具（推荐） |
| CommonJS  | cool-ui/dist/cjs | Node.js 环境         |
| UMD       | cool-ui/dist/umd | 浏览器直接引用       |

#### UMD 使用示例

```html
<!-- 通过CDN使用 -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/wldzs-ui/dist/umd/index.min.js"></script>
<script>
  // 通过全局变量 CoolUI 使用
  const { Button } = CoolUI;
  ReactDOM.render(
    <Button type="primary">UMD按钮</Button>,
    document.getElementById('root'),
  );
</script>
```

## 全局配置

```typescript
// main.ts
import { createApp } from 'vue';
import CoolUI from 'wldzs-ui';

const app = createApp();
app.use(CoolUI, {
  size: 'medium', // 全局组件尺寸
});
```

## 主题定制

## 浏览器支持

支持桌面端现代浏览器：

- Chrome ≥ 90
- Edge ≥ 90
- Firefox ≥ 100
- Safari ≥ 15

## 常见问题

### 为什么样式不生效？

请检查：

1. 是否引入样式文件
2. 浏览器控制台是否有报错

### 如何自定义图标？

```typescript
import { CIcon } from 'wldzs-ui';

// 基础用法（SVG支持待开发）
<CIcon name="search" />;
```

## 参与贡献

欢迎通过 [GitHub Issues](https://github.com/weilengdezaoshang/wldzs-ui/issues) 提交问题或 PR

## 许可证

[MIT](https://github.com/weilengdezaoshang/wldzs-ui/blob/master/LICENSE)

## 注意事项

1. 样式文件需要单独引入（自动按需加载已处理）
2. UMD 版本需提前引入 React 相关依赖
3. 按需加载需确保 babel-plugin-import 正确配置
