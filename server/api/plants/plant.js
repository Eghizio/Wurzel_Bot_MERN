//Route "/plant"
const express = require("express");
const router = express.Router();
const plants_data = require("../../data/plants_data");
//Middlewares
const escapeDiacritics = require("../../middleware/diacritics");
const queryParser = require("../../middleware/queryParser");
//Filters
const queryFilter = require("../../filter/queryFilter");

//Menu
router.get("/", (req, res) => {
    const menu = {
        "/plant": {
            "path": "example",
            "/id/:id": "/plant/id/6",
            "/q": "/plant/q?id=6&name=marchew"
        }
    };
    res.type("application/json"); //shouldnt i use it for all(maybe a middleware)
    res.json(menu);
});

//Param: id
router.get("/id/:id", (req, res) => {
    res.json(plants_data.filter(plant => 
        plant.id  == req.params.id)[0]);
});

//Param: name
router.get("/name/:name", queryParser, (req, res) => {
    res.json(plants_data.filter(plant => 
        escapeDiacritics(plant.name.toLowerCase()) == req.params.name)[0]);
});

//Query
//maybe just change to /plant?parameter=value
router.get("/q", queryParser, (req, res) => {
    let querriedPlants;

    if(Object.keys(req.query).length !== 0)
        querriedPlants = queryFilter(plants_data, req);
    else //tbh u can loop over plant and use typeof xD
        querriedPlants = {  
            "/plants/q": {
                "id": "number",
                "name": "string",
                "time": "number",
                "crop": "number",
                "sx": "number",
                "sy": "number",
                "level": "number"
            }
        };

    res.json(querriedPlants.length === 1 ? querriedPlants[0]:querriedPlants);
});

module.exports = router;
