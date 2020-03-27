const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",

    module: {
        rules: [
            {
                test:/\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            //
            //Loading Images
            //
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath:'images',
                            name:'[name]-[sha1:hash:7].[ext]'
                        }
                    }
                    ]
            },
            //
            //Loading fonts
            //
            {
                test:/\.(ttf|otf|eot|woff)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath:'fonts',
                            name:'[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            //
            // Loading Css
            //
            {
                test:/\.(css)$/,
                use: [ MiniCssExtractPlugin.loader,"css-loader"]
            },
            //
            //Loading SCSS
            //
            {
                test:/\.(s[ca]ss)$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
            },
            //
            //Loading TypeScript
            //
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.tsx', '.js', '.json']
                }
            }
        ]
    },
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"First Pages",
            template: "public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:'main-[hash:8].css'
        })

    ],

    devServer: {
        open:true,
    }
};