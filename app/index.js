/**
 * @file Bootstrap express.js server
 * @author BINAR_C7
 */

const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");

const app = express();

/** Install request logger */   
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());

/** Install Router */
app.use(router);

module.exports = app;

app.listen(process.env.PORT, () => console.log("Server running port 3000"))
