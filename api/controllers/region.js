'use strict'
//carga de librerias
const Region = require('../models/region');
const {response} = require('express');

/**
 * Función para guardar una nueva region
 * @param {*} req
 * @param {*} res
 */

function saveRegion(req,res){
    var params = req.body;
    var region = new Region();

    	region.region = params.region;
	region.abreviatura = params.abreviatura;
	region.capital = params.capital;

	region.save((err,regionStored) =>{
	 if (err) return res.status(500).send({message: "Error al guardar el seguimiento"});
	 if (!regionStored) return res.status(404).send({message: "El seguimiento no se ha guardado"});
	
	 return res.status(200).send({region: regionStored});

	});
}

// exportación de los módulos
module.exports = {
saveRegion
}

