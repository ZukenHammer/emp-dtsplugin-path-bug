const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { TuneDtsPlugin } = require('@efox/emp-tune-dts-plugin')
const path = require('path');


module.exports = function () {
  return {
    entry: './src/Car.ts',
    mode: 'production',// : 'development',
    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }]
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "car",
        filename: "remoteEntry.js",
        exposes: {
          "./Car": "./src/Car"
        },
        shared: {}
      }),
      new TuneDtsPlugin({
        isDefault: true,
        name: "index.d.ts",
        // name: "../dist/index.d.ts", //fixes the issue
        path: "dist",
        output: "./dist/index.d.ts",
      })
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    // uncomment output also fixes the isue
    // output: {
    //   filename: 'car.js',
    //   path: path.resolve(__dirname, 'dist'),
    //   library: 'Car',
    // }
  }
}