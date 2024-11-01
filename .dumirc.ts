import { defineConfig } from 'dumi';

const repo = 'cool-ui';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'cool-ui',
    socialLinks: {
      github: 'https://github.com/weilengdezaoshang/cool-ui',
    },
    nav: {
      'zh-CN': [{ title: '组件', link: '/' }],
      'en-US': [{ title: 'component', link: '/en/component' }],
    },
  },
});
