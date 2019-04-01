'use strict';
const model_utiles = require('./utiles.model');


module.exports.registrar = (req, res) =>{
    let utiles_nueva = new model_utiles(
        {
            idcentro: req.body.idcentro,
            nombre : req.body.nombre, 
            tipo : req.body.tipo, 
            ciclo : req.body.ciclo, 
            nivel : req.body.nivel,
            anho : req.body.anho,
            util : req.body.util,
            cantidad : req.body.cantidad
        }
    );
    utiles_nueva.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar la pregunta ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró la pregunta de forma correcta`
                    }
                )
            }
        }

    );
};


module.exports.consultar_utiles = (req ,res) =>{
    model_utiles.find({idcentro: req.body.idcentro}).then(
        function(utiles){
            if(utiles.length > 0){
                res.json(
                    {
                        success: true,
                        utiles: utiles
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        utiles: utiles
                    }
                )
            }
        }

    )
};
