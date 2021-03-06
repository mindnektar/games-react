module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './js/main.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"]
            },
            {
                test: /\.sass$/,
                loader: "style!css!resolve-url-loader!sass?sourceMap&indentedSyntax&includePaths[]=sass/helpers"
            },
            {
                test: /\.(ico|png)$/,
                loader: 'url-loader?limit=100000&includePaths[]=img'
            }
        ]
    },
    devtool: "#inline-source-map",
    resolve: {
        extensions: [
            '',
            '.js'
        ]
    }
};