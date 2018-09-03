let mix = require('laravel-mix')

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
})

mix.js('resources/assets/js/frontend/frontend.js', 'public/js')
    .js('resources/assets/js/admin/admin.js', 'public/js')
    .sass('resources/assets/sass/frontend.scss', 'public/css')
    .sass('resources/assets/sass/admin.scss', 'public/css')
    .version()
