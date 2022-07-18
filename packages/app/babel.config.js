module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          alias: {
            '@/': './src/',
            '@/components': './src/components/',
            '@/screens': './src/screens/',
            '@/generated': './src/generated/',
            '@/utils': './src/utils/',
          },
        },
      ],
    ],
  }
}
