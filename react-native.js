// https://github.com/intellicode/eslint-plugin-react-native#readme

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: './react',

  plugins: ['react-native'],

  globals: {
    performance: false,
  },

  env: {
    'react-native/react-native': true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },

  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-single-element-style-arrays': 'error',
  },
}

module.exports = config
