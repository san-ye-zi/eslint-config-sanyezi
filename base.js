// eslint.config.js
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort'

/**
 * Shared Flat ESLint Config for TypeScript projects.
 */
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],

      // Customize below
      '@typescript-eslint/no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': ['error', {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true
      }],
      '@typescript-eslint/no-redeclare': 'error',

      'simple-import-sort/imports': ['error', {
        groups: [
          // React imports first
          ['^react$', '^react-dom$'],
          // External packages
          ['^@?\\w'],
          // Internal packages/paths
          ['^@/'],
          // Parent imports
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports
          ['^.+\\.css$']
        ]
      }],
      'simple-import-sort/exports': 'error',
    },
  },
];
