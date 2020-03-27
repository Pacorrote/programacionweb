$(function() {
  $("#buscar").click(function() {
    let dato = $("#datoBuscar").val();
    alert("Dio click al boton " + dato);
    let tbodyTabla = $("tabla");
    $.ajax({
      url: "http://localhost:3000/estudiante/",
      data: {},
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      succes: function(respuesta) {
        console.log("La respuesta:", respuesta.msg);
        for (let i = 0; i < respuesta.response.length; i++) {
          tbodyTabla.append("<td></td>");
        }
        //alert(respuesta);
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });

  $("#buscar1").click(function() {
    let dato = $("#datoBuscar").val();
    alert("Dio click al boton " + dato);
    let tbodyTabla = $("tabla");
    $.ajax({
      url: "http://localhost:3000/estudiante/",
      data: {},
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      succes: function(respuesta) {
        console.log("La respuesta:", respuesta.msg);
        for (let i = 0; i < respuesta.response.length; i++) {
          tbodyTabla.append("<td></td>");
        }
        //alert(respuesta);
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });

  $("#eliminar").click(function() {
    let dato = $("#datoBuscar").val();
    alert("Dio click al boton " + dato);
    let tbodyTabla = $("tabla");
    $.ajax({
      url: "http://localhost:3000/estudiante/",
      data: {},
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      succes: function(respuesta) {
        console.log("La respuesta:", respuesta.msg);
        for (let i = 0; i < respuesta.response.length; i++) {
          tbodyTabla.append("<td></td>");
        }
        //alert(respuesta);
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });
});
