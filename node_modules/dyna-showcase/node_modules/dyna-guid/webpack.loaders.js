// help: http://webpack.github.io/docs/tutorials/getting-started/
// help: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli

const fs = require('fs');

module.exports = [
	{
		test: /\.js$/,
		use: ['babel-loader', 'source-map-loader'],
	},
	{
		// typescript loader
		test: /\.(tsx|ts)$/,
		use: [
			'babel-loader',
			'awesome-typescript-loader',
		],
	},
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  {
    test: /\.js$/, loader: "source-map-loader",
  },
  {
    test: /\.ts$/, loader: "source-map-loader",
  },
];
