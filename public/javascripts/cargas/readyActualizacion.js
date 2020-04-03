$(document).ready(function() {
  const id_estudiante = $("#id_estudiante");
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
        id_estudiante.append(`
          <option>${respuesta.response[index].id_estudiante}</option>
          `);
      }
    }
  });
});
