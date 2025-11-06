// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JS files using Babel
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.glb$/, // Use file-loader for .glb files
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".glb"], // Allow resolving .glb files
  },
};
