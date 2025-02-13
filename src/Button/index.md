---
nav:
  title: Button 按钮
  order: 1
---

import ButtonDemo from '../../../src/Button/demo/base';

## 基础用法

<div class="demo-block">
  <div class="demo-row">
    <c-button>默认按钮</c-button>
    <c-button type="primary">主要按钮</c-button>
    <c-button type="success">成功按钮</c-button>
    <c-button type="warning">警告按钮</c-button>
    <c-button type="danger">危险按钮</c-button>
  </div>
</div>

## 不同尺寸

<div class="demo-block">
  <div class="demo-row">
    <c-button size="large">大型按钮</c-button>
    <c-button>默认尺寸</c-button>
    <c-button size="small">小型按钮</c-button>
  </div>
</div>

## 禁用状态

<div class="demo-block">
  <div class="demo-row">
    <c-button disabled>默认按钮</c-button>
    <c-button type="primary" disabled>主要按钮</c-button>
  </div>
</div>

## 图标按钮

<div class="demo-block">
  <div class="demo-row">
    <c-button icon="search">搜索</c-button>
    <c-button type="primary" icon="download">下载</c-button>
  </div>
</div>

## Attributes

| 参数     | 说明           | 类型    | 可选值                                   | 默认值 |
| -------- | -------------- | ------- | ---------------------------------------- | ------ |
| type     | 类型           | string  | primary/success/warning/danger/info/text | —      |
| size     | 尺寸           | string  | large/small/mini                         | —      |
| plain    | 是否朴素按钮   | boolean | —                                        | false  |
| disabled | 是否禁用状态   | boolean | —                                        | false  |
| icon     | 图标类名       | string  | —                                        | —      |
| loading  | 是否加载中状态 | boolean | —                                        | false  |

## Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 按钮内容   |
| icon    | 自定义图标 |

## 代码示例

```html
<c-button type="primary" size="small" icon="search" @click="handleClick">
  搜索
</c-button>
```

<style>
.demo-block {
  margin: 20px 0;
  border: 1px solid #ebebeb;
  padding: 20px;
}
.demo-row {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}
</style>
