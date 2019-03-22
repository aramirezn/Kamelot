

'use strict';
const model_usuarios = require ('./usuarios.model.js');

//registro centro educativo
module.exports.registrar_ce = (req, res) =>{
    let centroe_nuevo = new model_usuarios(
        {
        nombre : req.body.nombre,
        alias : req.body.alias,
        cedula_juridica : req.body.cedula_juridica,
        clave : req.body.clave,
        tipo_centro : req.body.tipo_centro,
        nivel_centro : req.body.nivel_centro,
        foto : req.body.foto,
        nombre_comercial : req.body.nombre_comercial,
        provincia : req.body.provincia,
        canton : req.body.canton,
        distrito: req.body.distrito,
        direccion: req.body.direccion,
        fecha_fundacion : req.body.fecha_fundacion,
        referencia_historia : req.body.referencia_historia,
        adjuntar_documentos : req.body.adjuntar_documentos,
        telefono : req.body.telefono,
        fax : req.body.fax,
        sitio_web : req.body.sitio_web,
        cuentas_redesso : req.body.cuentas_redesso,
        correo_electronico : req.body.correo_electronico,
        contacto_nombre : req.body.contacto_nombre,
        papellido : req.body.papellido,
        sapellido : req.body.sapellido,
        identificacion : req.body.identificacion,
        departamento : req.body.departamento, 
        telefono_contacto : req.body.telefono_contacto,
        extension_contacto : req.body.extension_contacto,
        correo_electronico_contacto : req.body.correo_electronico_contacto,
        foto_contacto : req.body.foto_contacto,
        tipo_usuario : req.body.tipo_usuario,
        estado : req.body.estado,

        }
    );
    
    centroe_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se completar el registro ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró el centro educativo de manera correcta`
                    }
                )
            }
        }
    );
};

//registro padre familia
module.exports.registrar_pf = (req, res) =>{
    let padref_nuevo = new model_usuarios(
        {
            nombre : req.body.nombre,
            segundo_nombre: req.body.segundo_nombre,
            papellido : req.body.papellido,
            sapellido : req.body.sapellido,
            identificacion : req.body.identificacion,
            cantidad_hijos : req.body.cantidad_hijos,
            correo_electronico : req.body.correo_electronico,
            clave: req.body.clave,
            telefono : req.body.telefono,
            provincia : req.body.provincia,
            canton : req.body.canton,
            distrito: req.body.distrito,
            direccion: req.body.direccion,
            tipo_usuario : req.tipo_usuario,
            estado : req.estado,
        }
    );
    
    padref_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se completar el registro ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró el centro educativo de manera correcta`
                    }
                )
            }
        }
    );
};


//listado centro educativo
module.exports.listar_ce = (req ,res) =>{
    model_usuarios.find({tipo_usuario : 'CE'}).then(
        function(centroe){
            if(centroe.length > 0){
                res.json(
                    {
                        success: true,
                        centroe: centroe
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios centro educativo'
                    }
                )
            }
        }

    )
};

//listado usuarios padre familia
module.exports.listar_pf = (req ,res) =>{
    model_usuarios.find({tipo_usuario : 'PF'}).then(
        function(padref){
            if(padref.length > 0){
                res.json(
                    {
                        success: true,
                        padref: padref
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios padre de familia'
                    }
                )
            }
        }

    )
};

//listado de todos los usuarios
module.exports.listar_todos = (req ,res) =>{
    model_usuarios.find().then(
        function(usuarios){
            if(padref.length > 0){
                res.json(
                    {
                        success: true,
                        usuarios: usuarios
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios'
                    }
                )
            }
        }

    )
};

//Listado centros educativos con solicitudes pendientes
module.exports.listar_solicitud_pendiente = (req ,res) =>{
    model_usuarios.find({estado : false}).then(
        function(centroe){
            if(centroe.length > 0){
                res.json(
                    {
                        success: true,
                        centroe: centroe
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios con solicitudes pendientes'
                    }
                )
            }
        }

    )
};

//validar credenciales de los usuarios
module.exports.validar_sesion = (req, res)=>{
    model_usuarios.findOne({_id : req.body.correo_electronico}).then(
        function(usuario){
            if(usuario){
                if(usuario.contrasenna === req.body.contrasenna){
                    res.json({
                        success: true,
                        usuario: usuario
                    })
                }else{
                    res.json({
                        success: false,
                        msj: 'contraseña incorrecta'
                    })
                }
            }else{
                res.json({
                    success: false,
                    msj:'No se encontró el usuario'
                });
            }

        }
    )
};

//busca usuario por ID
module.exports.buscar_usuario = (req, res)=>{
    model_usuarios.findOne({_id : req.body.id}).then(
        function(usuario){
            if(usuario){
                res.json({
                    success:true,
                    usuario: usuario
                });
            }else{
                res.json({
                    success:false,
                    msj: 'No se encontró el usuario'
                });
            }

        }
    )
}