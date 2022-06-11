module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error'],
    'default-case-last': ['error'],
    'no-confusing-arrow': ['error'],
    'no-duplicate-imports': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'no-undef': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'multiline-ternary': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown'
        ],
        pathGroups: [
          {
            pattern: 'config/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'models/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'services/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'components/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'hooks/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'providers/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'styles/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'pages/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'errors/**',
            group: 'internal',
            position: 'before'
          }
        ]
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
      },
      typescript: {} // https://github.com/benmosher/eslint-plugin-import/issues/1485
    }
  }
};
