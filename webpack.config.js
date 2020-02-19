
const path = require('path');
const  HtmlWebpackPlugin =  require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry:'./app/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5000
      },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    plugins:  [
        new HtmlWebpackPlugin ({
            template : './public/index.html'
        }),
        new CopyPlugin([
            {
                from: "chrome",
              }
          ])
    ]
}