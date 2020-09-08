// librerias
const express = require('express');
const bodyParser = require('body-parser');

// inicio de APP
var app = express();

//cargar rutas
var region_routes = require('./routes/region')

//cargar middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors

//rutas
app.use('/api',region_routes);

//exportar
module.exports = app;
