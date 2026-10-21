import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    { ignores: ['build', 'coverage'] },
    {
        files: ['**/*.{js,jsx}'],
        extends: [
            js.configs.recommended,
            reactHooks.configs.flat['recommended-latest'],
        ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
    },
    {
        files: ['**/*.test.{js,jsx}', 'src/setupTests.js'],
        languageOptions: { globals: globals.vitest },
    },
]);
