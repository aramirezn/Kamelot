'use strict';

let userlocal = localStorage.getItem('usuario_en_sesion');
//console.log(userlocal);
let noticias = consultar_noticias(userlocal);
console.log(noticias);

let mostrar_datos = () => {

    let tabla = document.querySelector('.tabla_info tbody');
    tabla.innerHTML = '';

    for (let i = 0; i < noticias.length; i++) {
            let newdate = new Date(noticias[i]['fecha']);
            let month = newdate.getMonth() + 1;
            let day = newdate.getDate();
            let year = newdate.getFullYear();
            let dateformated = month + '-' + day + '-' + year;

            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = noticias[i]['titulo'];
            fila.insertCell().innerHTML = noticias[i]['descripcion'];
            fila.insertCell().innerHTML = dateformated;
    }

};

if (userlocal != null) {
    mostrar_datos();
}else{
    window.location.href='index.html';
}
