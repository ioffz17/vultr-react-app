var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.prod.config');
var compiler = webpack(config);
var app = express();
var port = process.env.PORT || 8080;
app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath
  })
);
app.use(require('webpack-hot-middleware')(compiler));

app.use('/', express.static('app'));

app.listen(port);
console.log('Listening on port ' + port);
