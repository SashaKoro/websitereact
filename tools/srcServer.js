// Server setup


import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 7777;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {     // Passing compiled JS
  noInfo: true,                      // No info in the command line
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {        // All requests will use index.html
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);       // Opens project in new browser tab
  }
});
