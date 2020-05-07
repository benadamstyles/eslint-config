// https://github.com/yannickcr/eslint-plugin-react#readme
// https://github.com/evcohen/eslint-plugin-jsx-a11y#readme

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: [
    './index',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    'react/button-has-type': 'warn',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'warn',
    'react/no-unused-state': 'warn',
    'react/prop-types': ['error', {skipUndeclared: true}],
    'react/void-dom-elements-no-children': 'error',

    // https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-key': ['error', {checkFragmentShorthand: true}],
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
  },
}

module.exports = config
