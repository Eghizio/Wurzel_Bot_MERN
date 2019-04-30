const axios = require("axios");

const water_url = (field_id) =>
    "http://s21.zieloneimperium.pl/save/"+
    "wasser.php?"+
    "feld[]="+field_id+"&felder[]="+field_id+
    "&cid=dd4874652cde2f4b18337fd899ad5598&garden=1";

const water = (field_id) => {
    axios.get(water_url(field_id))
        .then(response => console.log(response))
        .catch(error => console.log(error));
};    

module.exports = water;