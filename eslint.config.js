const js = require('@eslint/js');
const pluginSecurity = require('eslint-plugin-security');
const pluginNoSecrets = require('eslint-plugin-no-secrets');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    plugins: {
      security: pluginSecurity,
      'no-secrets': pluginNoSecrets,
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
        ...globals.jest,
        MyGlobal: 'writable',
      },
    },
    rules: {
      'no-restricted-imports': ['error', { patterns: ['^/'] }],
      'no-secrets/no-secrets': 'error',
      'require-jsdoc': 'error',
    },
  },
];
