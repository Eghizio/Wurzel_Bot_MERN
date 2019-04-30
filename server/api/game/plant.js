const axios = require("axios");

const plant_url = (field_id, plant_id) =>
    "http://s21.zieloneimperium.pl/save/"+
    "pflanz.php?"+
    "pflanze[]="+plant_id+"&feld[]="+field_id+"&felder[]="+field_id+
    "&cid=dd4874652cde2f4b18337fd899ad5598&garden=1";

const plant = (field_id, plant_id) => {
    axios.get(plant_url(plant_id, field_id))
        .then(response => console.log(response))
        .catch(error => console.log(error));
};

module.exports = plant;