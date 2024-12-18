const db = require("../database/conexion.js");

class EstudiantesController {
  constructor() {}
  consultar(req, res) {
    try {
      db.query(`select * from cursos.estudiantes`, (err, rows) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  consultarDetalle(req, res) {
    const { id } = req.params;
    try {
      db.query(
        `select * from cursos.estudiantes where id = ?`,
        [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err.message);
          }
          res.status(200).json(rows);
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  ingresar(req, res) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `insert into cursos.estudiantes (id,dni,nombre,apellido,email) values(NULL,?,?,?,?)`,
        [dni, nombre, apellido, email],
        (err, rows) => {
          if (err) {
            res.status(400).send(err.message);
          }
          res.status(201).json(rows);
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error);
    }
  }
  actualizar(req, res) {
    const { id } = req.params;
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `update cursos.estudiantes set dni = ?, nombre = ?, apellido = ?, email = ? where id = ?`,
        [dni, nombre, apellido, email, id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err.message);
          }
          res.status(201).json({ mensaje: "registro actualizado con exito" });
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error);
    }
  }
  borrar(req, res) {
    const { id } = req.params;
    try {
      db.query(`delete from estudiantes where id = ?`, [id], (err, rows) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(201).json({ mensaje: "registro eliminado con exito" });
      });
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error);
    }
  }
}

module.exports = new EstudiantesController();
