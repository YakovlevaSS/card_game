const path = require('path')
module.exports = {
    entry: './index.js',

    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader','css-loader'] },
          { test: /\.scss$/, use: ["style-loader", "scss-loader"] },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
          },
        ]
      },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
    }
