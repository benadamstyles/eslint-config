// https://github.com/gajus/eslint-plugin-flowtype#readme

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: ['./index', 'plugin:flowtype/recommended'],

  // NOTE: required to understand flow annotation syntax
  parser: '@babel/eslint-parser',

  plugins: ['flowtype'],

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },

  rules: {
    'flowtype/boolean-style': 'error',
    'flowtype/define-flow-type': 'warn', // NOTE: marks flow types as used
    'flowtype/generic-spacing': 'off',
    'flowtype/no-mutable-array': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': 'error',
    'flowtype/require-readonly-react-props': 'error',
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/space-after-type-colon': 'off',
    'flowtype/use-flow-type': 'warn', // NOTE: marks flow types as used
  },
}

module.exports = config
