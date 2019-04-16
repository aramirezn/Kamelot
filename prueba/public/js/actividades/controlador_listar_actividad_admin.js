'use strict';

const tabla = document.querySelector('#tbl_actividad tbody');
let user_local_actividad = localStorage.getItem('usuario_en_sesion');

if(user_local_actividad==null){
    window.location.href='index.html';
}

let mostrar_lista_actividades = () =>{
    let actividad = consultar_actividad_usuario(user_local_actividad);
    console.log(actividad);
    for(let i = 0; i < actividad.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = actividad[i]['titulo'];
        fila.insertCell().innerHTML = actividad[i]['actividad'];
        fila.insertCell().innerHTML = `<img src="${actividad[i]['foto']}" height="110px" width="110px"> `
        fila.insertCell().innerHTML = '<button class="btn_editar_actividad" style="border: none; background-color: inherit;"><img src="/public/images/edit.png" style="width: 20px; height:20px;"></button>' + ' ' + '<button class="btn_borrar_actividad" style="border: none; background-color: inherit;"><img src="/public/images/garbage.png" style="width: 20px; height:20px;"></button>';
        fila.querySelector('button.btn_editar_actividad').setAttribute('id', actividad[i]['_id']);
        fila.querySelector('button.btn_borrar_actividad').setAttribute('id', actividad[i]['_id']);
    }; 

};

mostrar_lista_actividades();




$('.btn_borrar_actividad').click(function () {
    var id_value = $(this).attr('id');
    //console.log('Borar' + id_value);

    Swal.fire({
        title: 'Desea eliminar la actividad?',
        text: "Este accion no se puede revertir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar actividad!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Eliminado!',
                'La actividad fue eliminada.',
                'success'
            )
            eliminar_actividad(id_value);
            window.location = "/public/listar_actividad.html";
        }
    })

});

