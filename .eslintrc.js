/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: './src/index.js',

  env: {
    node: true,
  },

  overrides: [
    {
      files: './tests/flow.js',
      extends: './src/flow.js',
    },

    {
      files: './tests/react.js',
      extends: './src/react.js',
    },

    {
      files: './tests/react-native.js',
      extends: ['./src/flow.js', './src/react-native.js'],
    },

    {
      files: './tests/typescript.ts',
      extends: './src/typescript.js',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },

    {
      files: './tests/typescript.tsx',
      extends: ['./src/react.js', './src/typescript.js'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },
  ],
}

module.exports = config
