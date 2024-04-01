const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle filename
        publicPath: '/', // Public path for assets
    },
    module: {
        rules: [
            // Add loader for JavaScript/JSX files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            // Other loaders for images, CSS, etc. go here
        ],
    },
    devServer: {
        historyApiFallback: true, // Allows client-side routing (e.g., React Router)
    },
};
