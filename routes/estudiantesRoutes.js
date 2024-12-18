const express = require("express");
const estudiantesController = require("../controllers/estudiantesController.js");
const router = express.Router();

router.get("/", estudiantesController.consultar);

router.post("/", estudiantesController.ingresar);

router
  .route("/:id")
  .get(estudiantesController.consultarDetalle)
  .put(estudiantesController.actualizar)
  .delete(estudiantesController.borrar);

module.exports = router;
