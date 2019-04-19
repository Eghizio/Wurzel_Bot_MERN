//Route "/plant"
const express = require("express");
const router = express.Router();
const plants_data = require("../../data/plants_data");
//Middlewares
const lowerCase = require("../../middleware/lowerCase");
const { escapeDiacritics, diacritics } = require("../../middleware/diacritics");

//Menu
router.get("/", (req, res) => {
    const menu = {
        "/plant": {
            "path": "example",
            "/id/:id": "/plant/id/6",
            "/q": "/plant/q?id=6&name=marchew"
        }
    };
    res.type("application/json");
    res.app.set("json spaces", 2); //is it possible to set it for certain responses?
    res.json(menu);
    res.app.set("json spaces", 0);
});

//Param: id
router.get("/id/:id", (req, res) => {
    res.json(plants_data.filter(plant => 
        plant.id  == req.params.id)[0]);
});

//Param: name
router.get("/name/:name", lowerCase, diacritics, (req, res) => {
    res.json(plants_data.filter(plant => 
        escapeDiacritics(plant.name.toLowerCase()) == req.params.name)[0]);
});

//Query
//maybe just change to /plant?parameter=value
//returns first matching parameter(id>name>time>etc) //middleware doesnt handle more than 1 atm
router.get("/q", lowerCase, diacritics, (req, res) => {
    const { query } = req;
    let querriedPlant;

    if(Object.keys(query).length !== 0){
        querriedPlant = plants_data.filter(plant =>
            plant.id == query.id || 
            escapeDiacritics(plant.name.toLowerCase()) == query.name ||
            plant.time == query.time ||
            plant.crop == query.crop ||
            plant.sx == query.sx ||
            plant.sy == query.sy ||
            plant.level == query.level
        )[0]; //remove [0] to get all matching plants tho it will be an array
    }
    else{
        querriedPlant = { //tbh u can loop over plant and use typeof xD
            "/plant/q": {
                "id": "number",
                "name": "string",
                "time": "number",
                "crop": "number",
                "sx": "number",
                "sy": "number",
                "level": "number"
            }
        };
    }
    res.app.set("json spaces", 2);
    res.send(querriedPlant); // omg cries in DRY xD
    res.app.set("json spaces", 0);
});

module.exports = router;
