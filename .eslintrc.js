module.exports = {
  env: {
    browser: false,
    es6: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    '@react-native-community',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: [
    '*.test.tsx',
    '.eslintrc.js',
  ],
  plugins: [
    'react-hooks',
    'react',
    '@typescript-eslint',
    'babel',
    'react-native',
  ],
  rules: {
    // eslint
    'global-require': 0,
    'camelcase': 0,
    'max-len': [2, 200, 4],
    'arrow-parens': [2, 'as-needed'],
    'consistent-return': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-case-declarations': 0,
    'no-mixed-operators': 0,
    'no-use-before-define': 0,
    'no-prototype-builtins': 0,
    'no-restricted-properties': 0,
    'no-return-assign': 0,
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'eslint-comments/no-unlimited-disable': 0,
    // babel plugin
    'babel/no-unused-expressions': 1,
    // react plugin
    'react/button-has-type': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/state-in-constructor': 0,
    // jsx-a11y
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    // typescript-eslint
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-unused-vars': 2,
    // eslint-import-plugin
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal'],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
      },
    ],
    // react-native
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
  },
};
