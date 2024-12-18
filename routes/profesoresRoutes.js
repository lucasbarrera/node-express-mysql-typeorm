const express = require("express");
const profesoresController = require("../controllers/profesoresController");
const router = express.Router();

router.get("/", profesoresController.consultar);

router.post("/", profesoresController.ingresar);
router
  .route("/:id")
  .get(profesoresController.consultarDetalle)
  .put(profesoresController.actualizar)
  .delete(profesoresController.borrar);

module.exports = router;
