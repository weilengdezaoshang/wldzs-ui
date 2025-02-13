module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  ignorePatterns: ['.dumirc.ts', '.fatherrc.ts'],
};
