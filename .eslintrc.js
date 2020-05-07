/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: './index',

  env: {
    node: true,
  },

  overrides: [
    {
      extends: './flow',
      files: './tests/flow.js',
    },

    {
      extends: './react',
      files: './tests/react.js',
    },

    {
      extends: ['./flow', './react-native'],
      files: './tests/react-native.js',
    },

    {
      extends: './typescript',
      files: './tests/typescript.ts',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },

    {
      extends: ['./react', './typescript'],
      files: './tests/typescript.tsx',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },
  ],
}

module.exports = config
