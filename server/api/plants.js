//Route "/plants"
const express = require("express");
const router = express.Router();
const plants_data = require("../data/plants_data");
//Middlewares
const escapeDiacritics = require("../middleware/diacritics");
const queryParser = require("../middleware/queryParser");
//Filters
const queryFilter = require("../filter/queryFilter");

//All Plants & Query
router.get("/", queryParser, (req, res) => {
    let querriedPlants;

    if(Object.keys(req.query).length !== 0)
        querriedPlants = queryFilter(plants_data, req);
    else
        querriedPlants = plants_data;

    res.json(querriedPlants);
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

module.exports = router;
