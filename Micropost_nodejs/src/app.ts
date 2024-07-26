import express from "express";
import path from "path";
const app = express();
const port = 3000;

// View EngineにEJSを指定。
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/", require("./routes"));

module.exports = app;

