import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    output: 'dist/esm',
    transformer: 'babel',
    ignores: ['src/**/demo/**'],
  },
  cjs: {
    output: 'dist/cjs',
    transformer: 'babel',
    ignores: ['src/**/demo/**'],
  },
  umd: {
    output: 'dist/umd',
    name: 'CoolUI',
    chainWebpack: (memo) => {
      memo.output.libraryExport('Button');
      return memo;
    },
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'cool-ui',
        libraryDirectory: 'esm',
        style: true,
      },
    ],
  ],
});
