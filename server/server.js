const express = require("express");
const mongoDB = require("../db/config");
const bodyParser = require("body-parser");
//Middlewares
const jsonFormat = require("./middleware/jsonFormat");
//Routings
const index = require("./api/index");
const plants = require("./api/plants");
const fields = require("./api/fields");
const jars = require("./api/jars");

//Database
const db = mongoDB;

//Application
const app = express();

app.set("title", "WurzelAPI");
app.set("mode", "dev"); //dev:production(tbh it only matters if its dev or not xD)

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jsonFormat);

//need proxy

//Routes
app.use("/api", index); //api entry
app.use("/api/plants", plants);
app.use("/api/fields", fields);
app.use("/api/jars", jars);

//PORT & init
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}... ${Date()}`));
