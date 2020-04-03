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

$(() => {
  $("#buscar").change(function() {
    let opcion = $("#buscar").val();
    $.ajax({
      url: `http://localhost:3000/estudiante/${opcion}`,
      data: {},
      type: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(respuesta) {
        $("table thead td")[1].innerHTML = opcion;
        $("#tabla").empty();
        for (let index = 0; index < respuesta.response.length; index++) {
          $("#tabla").append(`<tr>
          <td>${respuesta.response[index].nombre}</td>
          <td>${respuesta.response[index].Valor}</td>
          </tr>`);
        }
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });
});

$(() => {
  $("#submitActDirEst").click(function() {
    $.ajax({
      url: `http://localhost:3000/estudiante/actualizardireccion`,
      data: {
        id: $("#id_estudiante").val(),
        calle: $("#calle").val(),
        colonia: $("#colonia").val(),
        municipio: $("#municipio").val(),
        estado: $("#estado").val(),
        pais: $("#pais").val(),
        codigoPostal: $("#cp").val()
      },
      type: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(respuesta) {
        alert("Actualización exitosa");
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });
});

$(() => {
  $("#actualizar").click(function() {
    $.ajax({
      url: `http://localhost:3000/estudiante/actualizar`,
      data: {
        id_estudiante: $("#id_estudiante").val(),
        curp: $("#curp").val(),
        estatus: $("#estatus").val(),
        id_estado: $("id_estado").val(),
        id_salud: $("#id_salud").val(),
        id_persona: $("#id_persona").val(),
        id_academico: $("#id_academico").val(),
        id_tutor: $("#id_tutor").val()
      },
      type: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(respuesta) {
        alert("Actualización exitosa");
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });
});

$(() => {
  $("#submitIngresar").click(function() {
    $.ajax({
      url: `http://localhost:3000/estudiante/nuevo`,
      data: {
        nombre: $("#nombre").val(),
        apellidoPat: $("#apellidoPat").val(),
        apellidoMat: $("#apellidoMat").val(),
        sexo: $("#sexo").val(),
        celular: $("#ceular").val(),
        telefono: $("#telefono").val(),
        calle: $("#calle").val(),
        colonia: $("#colonia").val,
        municipio: $("#municipio").val(),
        estado: $("#estado").val(),
        pais: $("#pais").val(),
        codigoPostal: $("#cp").val(),
        curp: $("curp").val(),
        sangre: $("#tipoSangle").val(),
        numeroSeguro: $("#nss").val(),
        alergia: $("#alergias").val(),
        estatus: $("#status").val(),
        id_estado: $("#estado").val(),
        email: $("#email").val(),
        id_academico: $("#id_academico").val(),
        id_tutor: $("#id_tutor").val()
      },
      type: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(respuesta) {
        alert("Estudiante nuevo ingresado exitosamente");
      },
      error: function(err) {
        console.log(err);
        alert(err);
      }
    });
  });
});
