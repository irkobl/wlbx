const fileUpload = require ('express-fileupload');
const createError = require ('http-errors');
const express = require ('express');
const path = require ('path');


const indexRouter = require('./routes/index');
const formsRouter = require('./routes/forms');
const registerRouter = require('./routes/register');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/public', express.static('public'))
app.disable('etag');
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());



app.use('/', indexRouter, formsRouter, registerRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   return next(createError(404));
// });

module.exports = app;