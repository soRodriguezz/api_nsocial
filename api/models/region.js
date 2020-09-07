//librerias
'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Region
var RegionSchema = Schema({
	region: String,
	abreviatura: String,
	capital: String
});

module.exports = mongoose.model('Region',RegionSchema);
