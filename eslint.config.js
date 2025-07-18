import js from '@eslint/js';
import pluginSecurity from 'eslint-plugin-security';
import pluginNoSecrets from 'eslint-plugin-no-secrets';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    plugins: {
      security: pluginSecurity,
      'no-secrets': pluginNoSecrets
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
        ...globals.jest,
        MyGlobal: 'writable'
      }
    },
    rules: {
      'no-restricted-imports': ['error', { patterns: ['^/'] }],
      'no-secrets/no-secrets': 'error',
      'require-jsdoc': 'error'
    }
  }
];
