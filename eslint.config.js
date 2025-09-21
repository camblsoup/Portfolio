import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([ 'dist' ]),
  {
    files: [ '**/*.{ts,tsx,js,jsx}' ],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'brace-style': [
        'error',
        'allman',
        { allowSingleLine: true },
      ],
      'no-multiple-empty-lines': [
        'error',
        { max: 1, maxEOF: 0, maxBOF: 0 },
      ],
      'padded-blocks': [
        'error',
        'never',
      ],
      'object-curly-spacing': [
        'error',
        'always',
      ],
      'array-bracket-spacing': [
        'error',
        'always',
      ],
      'block-spacing': [
        'error',
        'always',
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'indent': [
        'error',
        2,
        { SwitchCase: 1 },
      ],
    },
  },
])
