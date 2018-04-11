/* eslint-disable */

import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    mode: "production",
    entry: [
        "babel-polyfill",
        "./index.tsx"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx", ".css", ".less"],
    },
    module: {
        rules: [{
            test: /\.md$/,
            loader: "html-loader!markdown-loader?gfm=false"
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                "babel-loader",
                {
                    loader: "awesome-typescript-loader",
                    options: {
                        useBabel: true,
                    }
                }
            ]
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=8192"
        }, {
            test: /\.svg$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }]
    }
};

export default config;
