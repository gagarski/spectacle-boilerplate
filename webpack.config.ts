/* eslint-disable */

import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    devtool: "cheap-module-source-map",
    entry: [
        "babel-polyfill",
        'webpack-hot-middleware/client',
        "react-hot-loader/patch",
        "./index.tsx"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist",
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: "development",
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
            loader: "babel-loader",
            include: __dirname
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
            loaders: ["style-loader", "raw-loader"],
            include: __dirname
        }, {
            test: /\.svg$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml",
            include: path.join(__dirname, "assets")
        }, {
            test: /\.png$/,
            loader: "url-loader?mimetype=image/png",
            include: path.join(__dirname, "assets")
        }, {
            test: /\.gif$/,
            loader: "url-loader?mimetype=image/gif",
            include: path.join(__dirname, "assets")
        }, {
            test: /\.jpg$/,
            loader: "url-loader?mimetype=image/jpg",
            include: path.join(__dirname, "assets")
        }]
    }
};

export default config;
