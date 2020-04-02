$(function() {
  $("#buscar").change(function() {
    let modo = $("#buscar").val();
    alert("Dio click al combobox: " + modo);
    //let tbodyTabla = $("tabla");
    $.ajax({
      url: "http://localhost:3000/estudiante/",
      data: {},
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      succes: function(respuesta) {
        console.log("La respuesta:", respuesta.msg);
        // for (let i = 0; i < respuesta.response.length; i++) {

        // }
        //alert(respuesta);
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });
});

$(function() {
  $("#eliminarBYEstatus").click(function() {
    alert("Está eliminando a un estudiante");
    //let tbodyTabla = $("tabla");
    $.ajax({
      url: "http://localhost:3000/estudiante/",
      data: {},
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      succes: function(respuesta) {
        console.log("La respuesta:", respuesta.msg);
        // for (let i = 0; i < respuesta.response.length; i++) {

        // }
        //alert(respuesta);
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });
});
