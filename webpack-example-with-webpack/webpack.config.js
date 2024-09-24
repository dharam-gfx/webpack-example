const path = require( 'path' );

module.exports = {
    mode: 'production',  // Enables minification and tree shaking
    entry: './src/index.js',  // Main entry point
    output: {
        filename: 'main.bundle.js',  // Output file
        chunkFilename: '[name].chunk.js',  // For dynamic imports
        path: path.resolve( __dirname, 'dist' ),  // Output directory
    },
    optimization: {
        usedExports: true,  // Tree shaking: removes unused code
    },
};



// npm init -y
// npm install webpack webpack-cli --save-dev

//npx webpack --config webpack.config.js --mode production


// Minification: Automatically enabled when you set mode: 'production' in Webpack. It reduces the size of your JavaScript and CSS files.
// Tree Shaking: Automatically enabled in production mode, it removes unused code by analyzing your ES6+ imports and exports.
// Code Splitting: Use multiple entry points or dynamic import() for lazy loading, enabling parts of the code to load on demand and improving performance.