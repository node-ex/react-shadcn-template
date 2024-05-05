module.exports = {
  root: true,
  env: {
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  // Used to add/modify the rules in the `rules` property
  plugins: [
    // 'import'
    // 'import-no-duplicates-prefix-resolved-path',
  ],
  // Used to enable whole new rule sets
  extends: [
    'eslint:recommended',
    // 'plugin:import/recommended',
    // Should be the last one
    'prettier',
  ],
  overrides: [
    {
      files: ['src/*.{ts,tsx}'],
      env: {
        browser: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          alias: {
            map: [['', './public']],
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          },
          typescript: {
            alwaysTryTypes: true,
            project: ['./tsconfig.json', './tsconfig.node.json'],
          },
        },
      },
      plugins: [
        'import',
        'import-no-duplicates-prefix-resolved-path',
        'simple-import-sort',
        '@typescript-eslint',
        'react',
        'react-hooks',
        'react-refresh',
      ],
      extends: [
        'plugin:import/recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        // Should be the last one
        'prettier',
      ],
      rules: {
        'no-unused-vars': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'off',
        'import-no-duplicates-prefix-resolved-path/no-duplicates': [
          'error',
          {
            prefixResolvedPathWithImportName: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
};
