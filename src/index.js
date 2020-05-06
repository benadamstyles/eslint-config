/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:import/recommended',
  ],

  plugins: ['prettier', 'eslint-comments', 'jest', 'import', 'fp', 'babel'],

  parserOptions: {
    sourceType: 'module',
  },

  // NOTE: only add rules which are not already included in extends
  rules: {
    // https://eslint.org/docs/rules/#possible-errors
    'no-template-curly-in-string': 'error',
    // 'no-useless-backreference': 'error', // TODO: enable in eslint v7
    'require-atomic-updates': 'error',

    // https://eslint.org/docs/rules/#best-practices
    'accessor-pairs': 'warn',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'warn',
    complexity: 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    // 'default-case-last': 'error', // TODO: enable in eslint v7
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'warn',
    yoda: 'error',

    // https://eslint.org/docs/rules/#variables
    'no-restricted-globals': ['error', 'event', 'name'],
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': ['error', 'nofunc'],

    // https://eslint.org/docs/rules/#stylistic-issues
    camelcase: ['error', {ignoreDestructuring: true, properties: 'never'}],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-unneeded-ternary': 'error',
    'one-var': ['error', 'never'],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',

    // https://eslint.org/docs/rules/#ecmascript-6
    'no-useless-computed-key': ['error', {enforceForClassMembers: true}],
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'symbol-description': 'error',

    // https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
    'eslint-comments/no-unused-disable': 'error',

    // https://github.com/jest-community/eslint-plugin-jest#readme
    'jest/no-deprecated-functions': 'warn',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-if': 'error',
    'jest/no-test-return-statement': 'warn',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-todo': 'warn',
    'jest/valid-title': 'error',

    // https://github.com/benmosher/eslint-plugin-import#readme
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'warn',
    'import/no-useless-path-segments': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': 'error',
    'import/order': 'warn',
    'import/newline-after-import': 'error',
    'import/no-named-default': 'error',

    // https://github.com/jfmengels/eslint-plugin-fp#readme
    'fp/no-mutating-assign': 'warn',
    'fp/no-mutation': ['warn', {commonjs: true, allowThis: true}],

    // https://github.com/babel/eslint-plugin-babel#readme
    'babel/no-invalid-this': 'error',
    'babel/no-unused-expressions': 'error',
  },
}
