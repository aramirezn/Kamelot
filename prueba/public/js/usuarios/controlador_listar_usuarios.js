'use strict';

const input_busqueda = document.querySelector('#txt_buscar');

let usuarios = listar_usuarios();
let tabla = document.querySelector('#tbl_usuarios tbody');
let userid = localStorage.getItem('usuario_en_sesion');


if(userid==null){
    window.location.href='index.html';
}

let mostrar_datos = () =>{


    let busqueda = '';
    if (input_busqueda.value !== null){
        busqueda = input_busqueda.value;
    }
    let resultado =[];

    resultado = usuarios.filter(usuario => (
        busqueda.length > 0 ? usuario.nombre.toLowerCase().trim().includes(
            busqueda.toLowerCase().trim()
            ) : usuario
        )
    );

    console.log('Se encontró un: ' + typeof resultado + ':');
    console.log(resultado);



    tabla.innerHTML = '';

    for(let i = 0; i < resultado.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        let celda_nombre = fila.insertCell();
        let celda_correo = fila.insertCell();
        let celda_tipo = fila.insertCell();
        let estado = fila.insertCell();

        celda_nombre.innerHTML = resultado[i]['nombre'];
        
        if (resultado[i]['tipo_usuario'] === 'PF') {
            celda_nombre.innerHTML = resultado[i]['nombre'] +' '+resultado[i]['papellido'];
        }else {
            celda_nombre.innerHTML = resultado[i]['nombre'];
        }

        celda_correo.innerHTML = resultado[i]['correo_electronico'];
        celda_tipo.innerHTML = resultado[i]['tipo_usuario'];
        estado.innerHTML = resultado[i]['estado'];

    }

};

mostrar_datos();
input_busqueda.addEventListener('keyup', mostrar_datos);