/** @type {{ 'eslint-comments/require-description': 'off' }} */
const rules = {
  'eslint-comments/require-description': 'off',
}

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: './index',

  env: {
    node: true,
  },

  overrides: [
    {
      extends: './node',
      files: './tests/node.js',
      rules,
    },

    {
      extends: './flow',
      files: './tests/flow.js',
      rules,
    },

    {
      extends: './react',
      files: './tests/react.js',
      rules,
    },

    {
      extends: ['./flow', './react-native'],
      files: './tests/react-native.js',
      rules,
    },

    {
      extends: './typescript',
      files: './tests/typescript.ts',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      rules,
    },

    {
      extends: ['./react', './typescript'],
      files: './tests/typescript.tsx',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      rules,
    },
  ],
}

module.exports = config
