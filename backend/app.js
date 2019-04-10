var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./openapi/swagger.json');

// cargar rutas
var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var loginRouter = require('./routes/login');
var registroRouter = require('./routes/registro');
var cambiarEstadoRouter = require('./routes/cambiarEstado');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/registro', registroRouter);
app.use('/api/v1/usuarios', usuariosRouter);
app.use('/api/v1/usuario/cambiar-estado', cambiarEstadoRouter);

// rutas swagger ui
app.use(
  '/api/v1/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

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

module.exports = app;