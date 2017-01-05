import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,     // displays debug info
    devtool: 'inline-source-map',      // display type
    noInfo: false,           // will display bundled files in the command line
    entry: [                    // 'Middleware injection'
        'eventsource-polyfill',                        // IE support via polyfill
        'webpack-hot-middleware/client?reload=true',    // Hot reloading (Dan Abramov talk - youtube)
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',         // Tells webpack that the files are going to the browser (Node uses different config)
    output: {             // Bundle creation
        path: __dirname + '/dist',     // Runs from the dist folder
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {                 // Looks for the code that will be bundled
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),     // No browser refresh with hot reloader
        new webpack.NoErrorsPlugin()     // Browser error messages
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},  // Grabs JS files and puts them through Babel
            {test: /\.(jpg|png)$/, loader: 'url-loader?limit=10000'},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
            {test: /(\.css)$/, loaders: ['style', 'css']},       // CSS file loading
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},          // Bootstrap font file handling
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
