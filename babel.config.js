/**
 * @type {import('@babel/core').ConfigFunction}
 */
function config(api) {
  api.cache.forever()

  return {
    presets: ['@babel/preset-react', '@babel/preset-flow'],
    plugins: ['@babel/plugin-syntax-top-level-await'],
  }
}

module.exports = config
