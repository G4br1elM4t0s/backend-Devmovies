const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes");

app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(router);

module.exports = app;
