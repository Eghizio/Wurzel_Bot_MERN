const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const plants_data = require("./plants_data");

const app = express();

app.use(bodyParser.json());
mongoose
    .connect("mongodb://localhost:27017/wurzel", {useNewUrlParser: true})
    .then( () => console.log("Connected to MongoDB!"))
    .catch( () => console.log("Can't connect to MongoDB!"));
const db = mongoose.connections;

/*********************///wil be moved to router dir WIP
app.get("/",(req, res) => {
    res.type("text/html"); //will serve a menu page with all endpoints or smthin 
    res.send("/" +"</br>"+"/plants"+"</br>"+"/plants/q?parameter=value");
});

app.get("/plants",(req, res) => {
    res.json(plants_data);
});
//test route, get single plant ex /plants/q?id=6
//for now hardcoded. returns the first matching parameter(id>name>time>etc) 
app.get("/plants/q",(req, res) => {
    let querriedPlant = plants_data.filter(plant =>
        plant.id == req.query.id || 
        plant.name.toLocaleLowerCase() == req.query.name ||
        plant.time == req.query.time ||
        plant.crop == req.query.crop ||
        plant.sx == req.query.sx ||
        plant.sy == req.query.sy ||
        plant.level == req.query.level
    )[0]; //remove [0] to get all matching plants
    res.json(querriedPlant);
    // for(const key in req.query) make it universal WIP
    // console.log(`${key} = ${req.query[key]}`);
});
/*********************/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}... ${Date()}`));
