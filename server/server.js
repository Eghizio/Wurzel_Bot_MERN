const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//Middlewares
const jsonFormat = require("./middleware/jsonFormat");
//Routings
const index = require("./api/index");
const plant = require("./api/plants/plant");
const plants = require("./api/plants/plants");

//Database
mongoose
    .connect("mongodb://localhost:27017/wurzel", {useNewUrlParser: true})
    .then( () => console.log("Connected to MongoDB!"))
    .catch( () => console.log("Can't connect to MongoDB!"));
const db = mongoose.connections;

//Application
const app = express();

app.set("title", "WurzelAPI");
app.set("mode", "dev"); //dev:production(tbh it only matters if its dev or not xD)

//Middleware
app.use(bodyParser.json());
app.use(jsonFormat);

//need proxy

//Routes
app.use("/api", index); //home
app.use("/api/plant", plant);
app.use("/api/plants", plants); //all plants

//PORT & init
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}... ${Date()}`));
