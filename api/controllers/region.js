'use strict'
//carga de librerias
const Region = require('../models/region');
const { response } = require('express');

/**
 * Función para guardar una nueva region
 * @param {*} req
 * @param {*} res
 */
function saveRegion(req, res) {
    var params = req.body;
    var region = new Region();

    if (params.region && params.abreviatura && params.capital) {
        region.region = params.region;
		region.breviatura = params.abreviatura;
		region.capital = params.capital;

        // busca si existe en la nodb email o nick para evitar duplicaciones
        Region.find({ $or: [{ region: region.region.toLowerCase() }, { capital: region.capital.toLowerCase() }] }).exec((err, regiones) => {
            if (err) return res.status(500).send({ message: 'Error en la petición de regiones.' });
            if (regiones && regiones.length >= 1) {
                return res.status(200).send({ message: 'La region que intentas registrar ya existe!!' })
            } else {
                region.save((err, regionStored) => {
                    if (err) return res.status(500).send({ message: 'Error al guardar las regiones' });
                    if (regionStored) {
                        res.status(200).send({ region: regionStored });
                    } else {
                        res.status(404).send({ message: 'No se ha registrado la region' })
                    }
                })
            }
        });

    } else {
        res.status(200).send({
            message: 'Envia todos los campos necesarios!!'
        });
    }
}

/**
 * Método para obtener Regioness
 * @param {*} req
 * @param {*} res
 */
function getRegion(req,res){

    var regionId = req.params.id;

    Region.findById(regionId,(err,region)=>{

        if(err) return res.status(500).send({message: 'Error en la petición'});
        if(!region) return res.status(404).send({message: 'La región no existe'})

        // busqueda de la region especifica
        return res.status(200).send({
            region
        })
    });
}

// exportación de los módulos
module.exports = {
    saveRegion,
    getRegion
}

