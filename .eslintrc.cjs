const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 解决’defineProps’ is not defined
    'vue/setup-compiler-macros': true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json')
      }
    }
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'eslint:recommended', // 使用推荐的eslint
    'plugin:vue/vue3-recommended', // 使用插件支持vue3
    'eslint-config-prettier'
  ],
  overrides: [],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/no-multiple-template-root': 'off', // 关闭多根节点的校验
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'error',
    'prettier/prettier': 'error',
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
}
