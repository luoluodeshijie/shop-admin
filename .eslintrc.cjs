module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  // parser: 'vue-eslint-parser', // 解析vue
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析ts HelloWorld.vue 报错  4:29  error  Parsing error: Unexpected token )
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'], // eslint规则 Error: Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
    extraFileExtensions: ['.vue'] // The extension for the file (.vue) is non-standard. You should add parserOptions.extraFileExtensions to your config。
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off' // vite-env.d.ts 报错  1:1  error  Do not use a triple slash reference for vite/client, use `import` style instead  @typescript-eslint/triple-slash-reference
  }
}
