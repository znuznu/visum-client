module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error'],
    'default-case-last': ['error'],
    'no-confusing-arrow': ['error'],
    'no-duplicate-imports': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'multiline-ternary': "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },]
  },
  "settings": {
    "react": {
      "version": "detect",
    }
  }
}
