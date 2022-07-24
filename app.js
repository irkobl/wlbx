var createError = require('http-errors');
var express = require('express');
var path = require('path');

const indexRouter = require('./routes/index');
const formsRouter = require('./routes/forms');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/forms', formsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
