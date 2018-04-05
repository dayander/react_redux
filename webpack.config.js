module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'

    },
    watch: true,
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets: ['react', 'es2016', 'stage-1']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            }
        ]
    }
};