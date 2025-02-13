'use strict';
(self.webpackChunkwldzs_cool_ui = self.webpackChunkwldzs_cool_ui || []).push([
  [467],
  {
    95810: function (d, e, a) {
      a.r(e),
        a.d(e, {
          demos: function () {
            return o;
          },
        });
      var n = a(67294),
        o = {};
    },
    79804: function (d, e, a) {
      a.r(e),
        a.d(e, {
          texts: function () {
            return n;
          },
        });
      const n = [
        {
          value: `npm install wldzs-ui --save
`,
          paraId: 0,
          tocIndex: 2,
        },
        {
          value: `yarn add wldzs-ui
`,
          paraId: 1,
          tocIndex: 3,
        },
        {
          value: `import { createApp } from 'vue';
import CoolUI from 'wldzs-ui';
import 'cool-ui/dist/esm/index.css';

const app = createApp();
app.use(CoolUI);
`,
          paraId: 2,
          tocIndex: 5,
        },
        { value: '\u901A\u8FC7 ', paraId: 3, tocIndex: 7 },
        { value: 'babel-plugin-import', paraId: 3, tocIndex: 7 },
        {
          value:
            ' \u5B9E\u73B0\u81EA\u52A8\u52A0\u8F7D\u7EC4\u4EF6\u548C\u6837\u5F0F\uFF1A',
          paraId: 3,
          tocIndex: 7,
        },
        {
          value: `npm install babel-plugin-import --save-dev
`,
          paraId: 4,
          tocIndex: 7,
        },
        {
          value: '\u5728 babel \u914D\u7F6E\u4E2D\u6DFB\u52A0\uFF1A',
          paraId: 5,
          tocIndex: 7,
        },
        {
          value: `plugins: [
  [
    'import',
    {
      libraryName: 'wldzs-ui',
      libraryDirectory: 'esm',
      style: true,
    },
  ],
];
`,
          paraId: 6,
          tocIndex: 7,
        },
        { value: '\u6A21\u5757\u683C\u5F0F', paraId: 7, tocIndex: 8 },
        { value: '\u8DEF\u5F84', paraId: 7, tocIndex: 8 },
        { value: '\u4F7F\u7528\u573A\u666F', paraId: 7, tocIndex: 8 },
        { value: 'ES Module', paraId: 7, tocIndex: 8 },
        { value: 'cool-ui/dist/esm', paraId: 7, tocIndex: 8 },
        {
          value: '\u73B0\u4EE3\u6253\u5305\u5DE5\u5177\uFF08\u63A8\u8350\uFF09',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'CommonJS', paraId: 7, tocIndex: 8 },
        { value: 'cool-ui/dist/cjs', paraId: 7, tocIndex: 8 },
        { value: 'Node.js \u73AF\u5883', paraId: 7, tocIndex: 8 },
        { value: 'UMD', paraId: 7, tocIndex: 8 },
        { value: 'cool-ui/dist/umd', paraId: 7, tocIndex: 8 },
        {
          value: '\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u7528',
          paraId: 7,
          tocIndex: 8,
        },
        {
          value: `<!-- \u901A\u8FC7CDN\u4F7F\u7528 -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>
<script src="https://unpkg.com/wldzs-ui/dist/umd/index.min.js"><\/script>
<script>
  // \u901A\u8FC7\u5168\u5C40\u53D8\u91CF CoolUI \u4F7F\u7528
  const { Button } = CoolUI;
  ReactDOM.render(
    <Button type="primary">UMD\u6309\u94AE</Button>,
    document.getElementById('root'),
  );
<\/script>
`,
          paraId: 8,
          tocIndex: 9,
        },
        {
          value: `// main.ts
import { createApp } from 'vue';
import CoolUI from 'wldzs-ui';

const app = createApp();
app.use(CoolUI, {
  size: 'medium', // \u5168\u5C40\u7EC4\u4EF6\u5C3A\u5BF8
});
`,
          paraId: 9,
          tocIndex: 10,
        },
        {
          value:
            '\u652F\u6301\u684C\u9762\u7AEF\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF1A',
          paraId: 10,
          tocIndex: 12,
        },
        { value: 'Chrome \u2265 90', paraId: 11, tocIndex: 12 },
        { value: 'Edge \u2265 90', paraId: 11, tocIndex: 12 },
        { value: 'Firefox \u2265 100', paraId: 11, tocIndex: 12 },
        { value: 'Safari \u2265 15', paraId: 11, tocIndex: 12 },
        { value: '\u8BF7\u68C0\u67E5\uFF1A', paraId: 12, tocIndex: 14 },
        {
          value: '\u662F\u5426\u5F15\u5165\u6837\u5F0F\u6587\u4EF6',
          paraId: 13,
          tocIndex: 14,
        },
        {
          value:
            '\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u662F\u5426\u6709\u62A5\u9519',
          paraId: 13,
          tocIndex: 14,
        },
        {
          value: `import { CIcon } from 'wldzs-ui';

// \u57FA\u7840\u7528\u6CD5\uFF08SVG\u652F\u6301\u5F85\u5F00\u53D1\uFF09
<CIcon name="search" />;
`,
          paraId: 14,
          tocIndex: 15,
        },
        { value: '\u6B22\u8FCE\u901A\u8FC7 ', paraId: 15, tocIndex: 16 },
        { value: 'GitHub Issues', paraId: 15, tocIndex: 16 },
        {
          value: ' \u63D0\u4EA4\u95EE\u9898\u6216 PR',
          paraId: 15,
          tocIndex: 16,
        },
        { value: 'MIT', paraId: 16, tocIndex: 17 },
        {
          value:
            '\u6837\u5F0F\u6587\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165\uFF08\u81EA\u52A8\u6309\u9700\u52A0\u8F7D\u5DF2\u5904\u7406\uFF09',
          paraId: 17,
          tocIndex: 18,
        },
        {
          value:
            'UMD \u7248\u672C\u9700\u63D0\u524D\u5F15\u5165 React \u76F8\u5173\u4F9D\u8D56',
          paraId: 17,
          tocIndex: 18,
        },
        {
          value:
            '\u6309\u9700\u52A0\u8F7D\u9700\u786E\u4FDD babel-plugin-import \u6B63\u786E\u914D\u7F6E',
          paraId: 17,
          tocIndex: 18,
        },
      ];
    },
  },
]);
