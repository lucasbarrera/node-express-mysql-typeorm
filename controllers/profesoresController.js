const db = require("../database/conexion.js");

class ProfesoresController {
  constructor() {}
  consultar(req, res) {
    try {
      db.query(`select * from profesores`, (err, rows) => {
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
      db.query(`select * from profesores where id = ?`, [id], (err, rows) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  ingresar(req, res) {
    try {
      const { dni, nombre, apellido, email, profesion, telefono } = req.body;
      db.query(
        `insert into profesores (id,dni,nombre,apellido,email,profesion,telefono) values(NULL,?,?,?,?,?,?)`,
        [dni, nombre, apellido, email, profesion, telefono],
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
      const { dni, nombre, apellido, email, profesion, telefono } = req.body;
      db.query(
        `update profesores set dni = ?, nombre = ?, apellido = ?, email = ?, profesion = ?, telefono = ? where id = ?`,
        [dni, nombre, apellido, email, profesion, telefono, id],
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
      db.query(`delete from profesores where id = ?`, [id], (err, rows) => {
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

module.exports = new ProfesoresController();
