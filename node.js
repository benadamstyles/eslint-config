// https://github.com/mysticatea/eslint-plugin-node#readme

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: ['./index', 'plugin:node/recommended'],

  plugins: ['node'],

  env: {
    node: true,
  },

  rules: {
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
  },
}

module.exports = config
