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
//Query to lower middleware
app.use((req, res, next) => {
    for(let key in req.query)
        req.query[key] = req.query[key].toLowerCase(); 
    //crashes at multiple name values ex: plants/q?name=CEBULE&name=marchew
    next();
});

app.get("/", (req, res) => {
    res.type("text/html"); //will serve a menu page with all endpoints or smthin 
    res.send("/" +"</br>"+"/plants"+"</br>"+"/plants/q?parameter=value");
});

app.get("/plants", (req, res) => {
    res.json(plants_data);
});

app.get("/plant/:id", (req, res) => {
    res.json(plants_data.filter(plant => plant.id == req.params.id)[0]);
});


//how to get just objects list not an array :c
//test route, get single plant ex /plants/q?id=6
//for now hardcoded. returns all matching parameters 
app.get("/plants/q", (req, res) => {
    const { query } = req;

    let querriedPlants = plants_data.filter(plant =>
        plant.id == query.id || 
        plant.name.toLowerCase() == query.name ||
        plant.time == query.time ||
        plant.crop == query.crop ||
        plant.sx == query.sx ||
        plant.sy == query.sy ||
        plant.level == query.level
    ); //returns array ;/
    res.json(querriedPlants.length === 1 ? querriedPlants[0]:querriedPlants);
    // for(const key in req.query) make it universal WIP
    // console.log(`${key} = ${req.query[key]}`);
});

//maybe just change to /plant?parameter=value
//returns first matching parameter(id>name>time>etc) 
app.get("/plant/q", (req, res) => {
    const { query } = req;

    let querriedPlant = plants_data.filter(plant =>
        plant.id == query.id || 
        plant.name.toLowerCase() == query.name ||
        plant.time == query.time ||
        plant.crop == query.crop ||
        plant.sx == query.sx ||
        plant.sy == query.sy ||
        plant.level == query.level
    )[0]; //remove [0] to get all matching plants tho it will be an array

    res.json(querriedPlant); // omg cries in DRY xD
});
/*********************/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}... ${Date()}`));
