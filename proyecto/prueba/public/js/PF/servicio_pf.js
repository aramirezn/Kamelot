'use strict';

let registrar_pf = (pCorreo, pNombre, pSegundoNombre, pApellido, pSegundoApellido, pIdentificacion, pTelefono, pProvincia, pCanton, pDistrito, pDireccion, pCantHijos) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/centroe_nuevo",
        method: "POST",
        data: {
            nombre : pNombre,
            segundo_nombre: pSegundoNombre,
            papellido : pApellido,
            sapellido : pSegundoApellido,
            identificacion : pIdentificacion,
            cantidad_hijos : pCantHijos,
            correo_electronico : pCorreo,
            clave: ******,
            telefono : pTelefono,
            provincia : pProvincia,
            canton : pCanton,
            distrito: pDistrito,
            direccion: pDireccion,
            tipo_usuario : 'PF',
            estado : 'activo',
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal({
            title: 'El padre de familia se ha sido registrado',
            text: 'Gracias',
            icon: 'success'
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal({
            title: 'El padre de familia no pudo registrado',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
            icon: 'error',
        });
    });
};