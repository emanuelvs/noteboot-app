const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: ["@babel/polyfill", "./src/index.tsx"],
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
        //filename: "[name].[hash].json"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
              },
              {
                test: /\.css$/i,
                use: [
                  'style-loader',
                  'css-loader',
                ],
              },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") })]
}