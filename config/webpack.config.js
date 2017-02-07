module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: 'bundle.js',
        path: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
			{
				test: /\.css?/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
			}
        ]
    }
};
