const express = require("express");
const router = express.Router();
const plants_data = require("./plants_data");

// "/plants"

router.get("/", (req, res) => {
    res.json(plants_data);
});

//how to get just objects list not an array :c
//returns all plants matching parameters 
router.get("/q", (req, res) => {
    const { query } = req;
    let querriedPlants;
    
    if(Object.keys(query).length !== 0){
        querriedPlants = plants_data.filter(plant =>
            plant.id == query.id || 
            plant.name.toLowerCase() == query.name || //need to take query.name.toLowerCase()
            plant.time == query.time ||
            plant.crop == query.crop ||
            plant.sx == query.sx ||
            plant.sy == query.sy ||
            plant.level == query.level
        );

        res.json(querriedPlants.length === 1 ? querriedPlants[0]:querriedPlants);
    }
    else{
        querriedPlants = { //tbh u can loop over plant and use typeof xD
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

        res.app.set("json spaces", 2); //is it possible to set it for certain responses?
        res.json(querriedPlants);
        res.app.set("json spaces", 0);
    }
    // for(const key in req.query) make it universal WIP
    // console.log(`${key} = ${req.query[key]}`);
});

module.exports = router;