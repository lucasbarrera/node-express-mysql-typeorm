const db = require("../database/conexion.js");

class CursosController {
  constructor() {}
  consultar(req, res) {
    res.json({ msg: "Consulta cursos" });
  }
  consultarDetalle(req, res) {
    res.json({ msg: "Consulta curso por id" });
  }
  ingresar(req, res) {
    res.json({ msg: "Ingreso de cursos" });
  }
  actualizar(req, res) {
    res.json({ msg: "Actualizacion de cursos" });
  }
  borrar(req, res) {
    res.json({ msg: "Borrado de curso" });
  }
}

module.exports = new CursosController();
