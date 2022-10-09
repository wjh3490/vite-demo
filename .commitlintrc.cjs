module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'build', 'chore', 'revert', 'style', 'test'],
      ],
      'type-empty': [2, 'never'], // <type> 不能为空
      // 'type-case': [2, 'always', 'lower-case'], // <type>格式小写
      'type-case': [0],
      'scope-empty': [0],
      // 'scope-case': [2, 'always', 'lower-case'], // <scope> 格式 小写
      'scope-case': [0],
      'subject-empty': [2, 'never'], // <subject> 不能为空 (默认)
      // 'subject-full-stop': [2, 'never', '.'], // <subject> 以.为结束标志
      'subject-full-stop': [0, 'never'],
      // 'subject-case': [2, 'never', 'lower-case'],
      'subject-case': [0, 'never'],
        // case可选值
        // 'lower-case' 小写 lowercase
        // 'upper-case' 大写 UPPERCASE
        // 'camel-case' 小驼峰 camelCase
        // 'kebab-case' 短横线 kebab-case
        // 'pascal-case' 大驼峰 PascalCase
        // 'sentence-case' 首字母大写 Sentence case
        // 'snake-case' 下划线 snake_case
        // 'start-case' 所有首字母大写 start-case
  
      'header-max-length': [0, 'always', 72], // header 最长72
      // 'body-leading-blank': [2, 'always'], // body换行
      // 'footer-leading-blank': [1, 'always'], // <footer> 以空行开头
    },
  };
  