var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var eapp = express();

// view engine setup
eapp.set('views', path.join(__dirname, 'views'));
eapp.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//eapp.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
eapp.use(logger('dev'));
eapp.use(bodyParser.json());
eapp.use(bodyParser.urlencoded({ extended: false }));
eapp.use(cookieParser());
eapp.use(express.static(path.join(__dirname, 'public')));

eapp.get('*', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

// // catch 404 and forward to error handler
// eapp.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (eapp.get('env') === 'development') {
  eapp.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
eapp.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = eapp;

var port = Number(5002);
eapp.listen(port);
console.log('Now running on port ' + port);
