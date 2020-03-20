const db = require("./db_connection.js");

const estudiante = function(estudiante) {
  this.id_persona = estudiante.id_persona;
};

estudiante.getEstudiantes = function(resultado) {
  db.query("Select * from estudiante", function(err, res) {
    if (err) {
      console.log("error: ", err);
      resultado(err, null);
    } else {
      resultado(null, res);
    }
  });
};

estudiante.getEstudiantesId = function(estudianteId, resultado) {
  db.query("Select * from estudiante ?", estudianteId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      return null;
    } else {
      return res;
    }
  });
};

estudiante.getEstudianteNombre = function(nombre, resultado) {
  db.query("Select * from estudiante where nombre like ?", nombre, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      resultado(err, null);
    } else {
      resultado(null, res);
    }
  });
};

estudiante.addEstudiante = function() {
  // {nombre: valor, apellido: valor2}

  db.query(
    "Insert into persona (nombre, apellidoPat, apellidoMat, sexo, id_contacto, id_direccion) values(?, ?, ?, ?, ?, ?)",
    [
      body.nombre,
      body.apellidoPat,
      body.apellidoMat,
      body.sexo,
      contacto,
      direccion
    ],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
  db.query("SELECT MAX(id_persona) as id_persona FROM persona", function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
    } else {
      this.id_persona = res[0].id_persona;
    }
  });
  db.query(
    "Insert into estudiante(curp, estatus, id_estado, id_salud, id_persona, id_academico, id_tutor) values(?, ?, ?, ?, ?, ?, ?)",
    [
      body.curp,
      body.estatus,
      body.id_estado,
      salud,
      this.id_persona,
      body.id_academico,
      body.id_tutor
    ],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
      } else {
        result(null, res);
      }
    }
  );
};

estudiante.updateEstudiante = function(estudiante, result) {
  // {nombre: valor, apellido: valor2}
  db.query(
    "update estudiante set ? where id_estudiante = ?",
    [estudiante, estudiante.id_estudiante],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

estudiante.getOrdenEstudiante = function(resultado) {
  db.query(
    "SELECT nombre FROM persona a INNER JOIN estudiante e on a.id_persona=e.id_estudiante ORDER by 1",
    function(err, res) {
      if (err) {
        console.log("erro: ", err);

        resultado(err, null);
      } else {
        resultado(err, res);
      }
    }
  );
};

estudiante.getMunicipio = function(resultado) {
  db.query(
    "SELECT p.nombre,d.municipio from persona p, estudiante e,direccion d WHERE e.id_persona = p.id_persona and p.id_direccion = d.id_direccion",
    function(err, res) {
      if (err) {
        console.log("erro: ", err);

        resultado(err, null);
      } else {
        resultado(err, res);
      }
    }
  );
};

estudiante.getPromedio = function(resultado) {
  db.query(
    "SELECT p.nombre,d.promedio from persona p, estudiante e,academico d WHERE e.id_persona = p.id_persona and p.id_direccion = d.id_academico",
    function(err, res) {
      if (err) {
        console.log("erro: ", err);

        resultado(err, null);
      } else {
        resultado(err, res);
      }
    }
  );
};

estudiante.getEscuela = function(resultado) {
  db.query(
    "SELECT p.nombre,d.escuelaE from persona p, estudiante e,academico d WHERE e.id_persona = p.id_persona and p.id_direccion = d.id_academico",
    function(err, res) {
      if (err) {
        console.log("erro: ", err);

        resultado(err, null);
      } else {
        resultado(err, res);
      }
    }
  );
};

estudiante.updatedireccion = function(direccion, estudiante, resultado) {
  db.query(
    "UPDATE direccion set ? WHERE id_direccion=(SELECT d.id_direccion from direccion d, estudiante e, persona p where e.id_persona = p.id_persona and d.id_direccion = p.id_direccion and e.id_estudiante = ?)",

    [direccion, estudiante.id],

    function(err, res) {
      if (err) {
        console.log("error: ", err);

        resultado(err, null);
      } else {
        resultado(null, res);
      }
    }
  );
};

estudiante.updateEstatus = function(resultado) {
  db.query(
    "delete from estudiante where  id_estudiante IN (SELECT  e.id_estudiante FROM estudiante e, academico a WHERE e.id_academico = a.id_academico and a.promedio < 7)",

    function(err, res) {
      if (err) {
        console.log("error: ", err);

        resultado(err, null);
      } else {
        resultado(null, res);
      }
    }
  );
};

/**/
module.exports = estudiante;
