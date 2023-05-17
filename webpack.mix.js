const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
        output: {
            publicPath: '/public/',
            filename: '[name].js',
            chunkFilename: 'vue/chunks/[name].js',//remove "public" before npm run prod
        },
    })
    .setResourceRoot('/vue/')
    .setPublicPath('public')   
    .js('./app.js', 'public/vue')
    .extract(['vue'])
    .vue()
    .version()

if (mix.inProduction()) {
    mix.version();
}

// mix.browserSync({
//     proxy: 'kitab'
// });
