import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vueParser from 'vue-eslint-parser';
import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const customGlobals = {
  window: 'readonly',
  document: 'readonly',
  navigator: 'readonly',
  console: 'readonly',
  HTMLElementTagNameMap: 'readonly',
  defineProps: 'readonly',
  defineEmits: 'readonly',
  defineExpose: 'readonly',
  withDefaults: 'readonly',
  Component: 'readonly',
};

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.storybook/**',
      'coverage/**',
      '**/*.config.{js,ts}',
      'src/**/*.stories.{ts,tsx}',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
      globals: customGlobals,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': ['error', { usePrettierrc: true }],
    },
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2023,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: customGlobals,
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...vuePlugin.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': ['error', { usePrettierrc: true }],
    },
  },

  prettierConfig,
];
