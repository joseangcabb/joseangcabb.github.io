import eslint from '@eslint/js'
import globals from 'globals'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  globalIgnores(['dist/**', 'node_modules/**', 'build/**', '.astro/**', '**/*.d.ts']),

  // General language settings for the linter
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
  },

  // Base ESLint recommended rules
  eslint.configs.recommended,

  // Astro
  {
    files: ['**/*.astro'],
    extends: [
      tseslint.configs.recommended,
      eslintPluginAstro.configs.recommended,
      eslintPluginAstro.configs['jsx-a11y-strict'],
    ],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        project: './tsconfig.json',
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  // TypeScript
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
    languageOptions: { parser: tsParser },
  },

  // JSX (React components)
  {
    files: ['**/*.jsx'],
    extends: [jsxA11y.configs.strict],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // TypeScript JSX (React components)
  {
    files: ['**/*.tsx'],
    extends: [tseslint.configs.recommended, jsxA11y.configs.strict],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // Prettier
  eslintPluginPrettierRecommended,
])
