module.exports = {
  publicPath: '/',
  outputDir: 'public',
  assetsDir: 'assets',
  
  pluginOptions: {
    nast: {
      entry: 'app/docs/config',
      appDir: 'app/docs',
    },
  },
}
