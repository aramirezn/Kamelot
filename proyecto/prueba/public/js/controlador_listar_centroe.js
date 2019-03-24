'use strict';

const tabla = document.querySelector('#tbl_centroe tbody');

let mostrar_datos = () =>{
    let usuarios = listar_centroe();
    for(let i =0; i < usuarios.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = usuarios[i]['nombre'];
        fila.insertCell().innerHTML = usuarios[i]['cedula_juridica'];
        fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
        fila.insertCell().innerHTML = usuarios[i]['telefono'];
        fila.insertCell().innerHTML = '<img src="'+ usuarios[i]['telefono']+'">';
        fila.insertCell().innerHTML = '<button type="button" id="btnSeleccionarImagen" class="boton_imagen">Bajar documento</button>';





    };

};


mostrar_datos();