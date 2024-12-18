const express = require("express");
const routerEstudiantes = require("./routes/estudiantesRoutes.js");
const routerProfesores = require("./routes/profesoresRoutes.js");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.use("/estudiantes", routerEstudiantes);

app.use("/profesores", routerProfesores);

app.listen(PORT || 3001, () => {
  console.log("servidor activo");
});
