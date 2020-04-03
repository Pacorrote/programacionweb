$(function() {
  $("#eliminarBYEstatus").click(function() {
    alert("Está eliminando a un estudiante");
    //let tbodyTabla = $("tabla");
    $.ajax({
      url: "http://localhost:3000/estudiante/eliminarestatus",
      data: {},
      type: "PUT",
      contentType: "application/json",
      dataType: "json",
      success: function(respuesta) {
        alert(respuesta.response);
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });
});

$(document).ready(function() {
  //líneas a ejecutarse

  const tbodyTabla = $("#tabla");
  $.ajax({
    url: "http://localhost:3000/estudiante/",
    data: {},
    type: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: respuesta => {
      console.log(respuesta.msg);
      for (let index = 0; index < respuesta.response.length; index++) {
        console.log(
          respuesta.response[index].id_estudiante +
            " " +
            respuesta.response[index].nombre
        );
        tbodyTabla.append(`<tr>
        <td>${respuesta.response[index].nombre}</td>
        <td>${respuesta.response[index].apellidoPat}</td>
        <td>${respuesta.response[index].apellidoMat}</td>
        </tr>`);
      }
    }
  });
  const selectSexo = $("#sexo");
  $.ajax({
    url: "http://localhost:3000/sexo/",
    data: {},
    type: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: respuesta => {
      console.log(respuesta.msg);
      for (let index = 0; index < respuesta.response.length; index++) {
        console.log(
          respuesta.response[index].id_estudiante +
            " " +
            respuesta.response[index].nombre
        );
        selectSexo.append(`
        <option>${respuesta.response[index].sexo}</option>
        `);
      }
    }
  });
  const selectstatus = $("#status");
  $.ajax({
    url: "http://localhost:3000/estado/",
    data: {},
    type: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: respuesta => {
      console.log(respuesta.msg);
      for (let index = 0; index < respuesta.response.length; index++) {
        console.log(
          respuesta.response[index].id_estudiante +
            " " +
            respuesta.response[index].nombre
        );
        selectstatus.append(`
        <option>${respuesta.response[index].descripcion}</option>
        `);
      }
    }
  });
});
