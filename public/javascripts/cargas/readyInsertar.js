$(document).ready(function() {
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
  const selectstatus = $("#estado");
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
            <option>${respuesta.response[index].id_estado}</option>
            `);
      }
    }
  });
});
