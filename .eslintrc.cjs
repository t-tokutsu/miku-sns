module.exports = {
  root: true, // プロジェクトのルートディレクトリーに置く設定ファイル
  env: { browser: true, es2020: true, node: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // reactの推奨設定
    'plugin:react-hooks/recommended', // react hooksの推奨設定
    'plugin:prettier/recommended', // prettierの推奨設定（必ず配列の最後に記述）
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['import', 'unused-imports', 'import-access', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': ['error'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // 'function-declaration' | 'function-expression' | 'arrow-function'
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'never',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import-access/jsdoc': [
      'error',
      {
        indexLoophole: true,
        filenameLoophole: true,
      },
    ],
    'no-throw-literal': ['error'],
  },
};
