'use strict';
const model_rating = require('./rating.model');


module.exports.registrar = (req, res) =>{
    let rating_nuevo = new model_rating(
        {
            userid: req.body.userid,
            centroid : req.body.centroid,
            comentario : req.body.comentario,
            rating : req.body.rating,
        }
    );
    rating_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar el rating ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró el rating de forma correcta`
                    }
                )
            }
        }

    );
};


module.exports.listar_todos = (req ,res) =>{
    model_rating.find().then(
        function(actividad){
            if(actividad.length > 0){
                res.json(
                    {
                        success: true,
                        actividad: actividad
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        actividad: 'No se encontraron actividades'
                    }
                )
            }
        }

    )
};

module.exports.listar_actividades_usuario = (req, res) => {
    model_rating.find({userid: req.body.userid}).then(
        function (actividads) {
            if (actividads) {
                res.json(
                    {
                        success: true,
                        actividads: actividads
                    }
                )
            } else{
                res.json(
                    {
                        success: false,
                        actividads: `Error, no se encontraron actividads: ${actividads}`
                    }
                )
            }
        }

    )
};