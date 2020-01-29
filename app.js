var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes.attachHandlers(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// **MY** setup general error handler
// app.use(function (err, req, res, next) {
//   if (!err.logged) {
//     console.error('Express default error handler:', err);
//   }
//   res.status(500).send('Something broke!')
// });
// // setup 404 error handler
// app.use(function (req, res, next) {
//   res.status(404).send({ error: 'Not found' });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
