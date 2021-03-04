// const mix = require('laravel-mix');

// /*
//  |--------------------------------------------------------------------------
//  | Mix Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Mix provides a clean, fluent API for defining some Webpack build steps
//  | for your Laravel applications. By default, we are compiling the CSS
//  | file for the application as well as bundling up all the JS files.
//  |
//  */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

const mix = require('laravel-mix')

if (!mix.inProduction()) {
  mix.webpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          test: /\.(js|vue)?$/,
        },
      ],
    },
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      proxy: {
        '*': 'http://0.0.0.0:8000',
      },
    },
  })
}

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': `${__dirname}/resources/js`,
    },
  },
})

mix.js('resources/js/app.js', 'public/js', 'public/js/chunks/')
mix.sass('resources/sass/app.scss', 'public/css')
