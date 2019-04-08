'use strict';

const userPadreId = localStorage.getItem('usuario_en_sesion');
const userCentroId = localStorage.getItem('centro_id');
const input_comentario = document.querySelector('#rating_text_area');
const input_rating = document.querySelector('#stars');
const boton_registrar = document.querySelector('#btn_enviar');




let validar = () => {
    let error = false;

    let value_rating = parseInt($('#stars li.selected').last().data('value'), 10);

    if (input_comentario.value == '') {
        input_comentario.classList.add('error_input')
        error = true;
    } else {
        input_comentario.classList.remove('error_input')
    };

    if (isNaN(value_rating)) {
        input_rating.classList.add('error_input')
        error = true;
    } else {
        input_rating.classList.remove('error_input')
    };

    return error;

};

let mostrarDatos = () => {

    if (validar() == false) {
        let userid = userPadreId;
        let centroid = userCentroId;
        let comentario = input_comentario.value;
        let rating = parseInt($('#stars li.selected').last().data('value'), 10);
        console.log(rating)
        registrar_actividad(userid, centroid, comentario, rating);
    } else {
        Swal.fire({
            type: 'warning',
            title: 'Actividad No enviada con éxito',
            text: `Revise los Campos`
        })
    }



}

boton_registrar.addEventListener('click', mostrarDatos);