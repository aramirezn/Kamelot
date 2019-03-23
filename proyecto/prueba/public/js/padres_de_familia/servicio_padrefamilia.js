
// Validar informacion de campos de formulario

let registrar_citas = (pcodigo, pnombre, pcorreo, pfecha) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_citas",
        method: "POST",
        data: {
            codigo: pcodigo,
            nombre: pnombre,
            correo: pcorreo,
            fecha: pfecha
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La cita fue registrada',
            text: 'Gracias por registrar una actividad'
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La cita no fue registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });
};


let buscar_usuario = () => {

    let consultar_usuario = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_usuario",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        consultar_usuario = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return consultar_usuario;

};



