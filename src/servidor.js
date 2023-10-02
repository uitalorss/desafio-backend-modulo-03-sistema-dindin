const express = require("express");
const { rotas } = require("./rotas/rotas");
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const app = express();

app.use(express.json());

app.use(rotas);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

module.exports = app;
