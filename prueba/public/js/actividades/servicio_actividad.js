'use strict';

let registrar_actividad = (pId,pActividad, pfoto) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_actividad",
    method: "POST",
    data: {
      userid: pId,
      actividad: pActividad,
      foto: pfoto
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La actividad fue enviada',
      text: 'En unos segundos se mostrará en tu perfil'
    }).then(function() {
      window.location = "perfil_centroedu.html";
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La actividad no pude ser enviada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_actividad = () => {
  let lista_actividad = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_actividad",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_actividad = res.actividad;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_actividad;
 
};


let consultar_actividad_usuario = (pId) => {

  let consultar_actividad = [];

  let request = $.ajax({
      url: "http://localhost:4000/api/listar_actividad_usuario",
      method: 'POST',
      async: false,
      data: {
          userid : pId
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  });

  request.done(function (response) {

    if (response.success){
      consultar_actividad = response.actividads;
  }else{
          consultar_actividad = response.actividads;
          swal.fire({
              type: 'error',
              title: 'Error',
              text: response.msj
          });
  }

  });

  return  consultar_actividad;

};