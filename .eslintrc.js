'use strict'

module.exports = {
  extends: [
    '@tkuminecz/eslint-config/typescript',
    '@tkuminecz/eslint-config/prettier',
  ],
  plugins: ['import', 'jest'],
  env: {
    es6: true,
    'jest/globals': true,
    node: true,
  },
}
