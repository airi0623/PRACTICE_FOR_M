const presets = [
  [
    '@babel/env',
    {
      targets: {
        browsers: ['last 2 versions', '> 3% in JP'],
        IE: 11,
      },
      useBuiltIns: 'usage',
    },
  ],
]

const plugins = ['@babel/plugin-syntax-dynamic-import']

module.exports = { presets, plugins }
