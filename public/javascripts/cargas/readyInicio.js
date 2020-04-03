$(document).ready(function() {
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
});
