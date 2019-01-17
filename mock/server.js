const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
//const config = require('../webpack.config.js');
//const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

// Serve the files on port 4000.


//to deal with preflight request
app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST PUT OPTIONS DELETE");

  next();
  // if ('OPTIONS' === req.method) {
  //   //respond with 200
  //   //to deal with preflight request
  //   res.sendStatus(200);
  // } else {
  //   next();
  // }
});
var routes = require('./route');
routes(app);




app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!\n');
});