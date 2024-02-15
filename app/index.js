/**
 * @file Bootstrap express.js server
 * @author BINAR_C7
 */

const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");

const swaggerUi = require("swagger-ui-express");
const swaggerJsondoc = require("swagger-jsdoc");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(router);

module.exports = app;
