'use strict'
//carga de librerias
const express = require('express');
const RegionController = require('../controllers/region');

//config
var api = express.Router();


//rutas de la api Region
api.post('/region',RegionController.saveRegion)


module.exports = api;
