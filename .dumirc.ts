import { defineConfig } from 'dumi';
const repo = 'wldzs-ui';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  outputPath: 'docs-dist',
  exportStatic: false,
  themeConfig: {
    name: repo,
    socialLinks: {
      github: 'https://github.com/weilengdezaoshang/wldzs-ui',
    },
    nav: {
      'zh-CN': [
        { title: '文档', link: '/' },
        { title: '组件', link: '/components/guide' },
      ],
      'en-US': [
        { title: 'component', link: '/en/component' },
        { title: 'document', link: '/en/document' },
      ],
    },
    footer: 'Open-source MIT Licensed | Copyright © 2023-present', // 页脚
    prefersColor: {
      // 主题色配置
      default: 'light',
      switch: true,
    },
    styles: [
      `.__dumi-default-navbar-logo { height: 24px !important; }`, // 自定义样式覆盖
    ],
    extraBabelPlugins: [
      [
        'import',
        {
          libraryName: repo,
          customStyleName: (name: string) => `${repo}/es/${name}/style`,
        },
      ],
    ],
    metas: [
      { name: 'keywords', content: '一个简单的react组件库' },
      { name: 'description', content: 'wldzs-ui - 一个简单的react组件库' },
    ],
  },
});
