const axios = require("axios");

const harvest_url = (field_id, plant_id) =>
    "http://s21.zieloneimperium.pl/save/"+
    "ernte.php?"+
    "pflanze[]="+plant_id+"&feld[]="+field_id+"&felder[]="+field_id+
    "&cid=7e8f2ce834fae949faa731a80c963a81&garden=1";

const harvest = (field_id, plant_id) => {
    axios.get(harvest_url(plant_id, field_id))
        .then(response => console.log("Success!", response))
        .catch(error => console.log("Error!", error));
};

module.exports = harvest;