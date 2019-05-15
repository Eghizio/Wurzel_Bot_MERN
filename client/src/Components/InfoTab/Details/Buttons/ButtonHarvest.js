import React from 'react'
import axios from "axios";

const ButtonHarvest = ({label, fields, plant}) => {

    const harvest_url = (field_id, plant_id) =>
    "http://s21.zieloneimperium.pl/save/"+
    "ernte.php?"+
    "pflanze[]="+plant_id+"&feld[]="+field_id+"&felder[]="+field_id+
    "&cid=7e8f2ce834fae949faa731a80c963a81&garden=1";

    const harvestField = () => {
        fields.forEach(field => {
            new Image().src = harvest_url(field, plant.value); //no err handling
 
                axios.patch("/api/fields", {
                    id: field,
                    plant: {
                        id: null,
                        name: null,
                        time_planted: null
                    },
                    isWatered: {
                        state: false,
                        time_watered: null
                    }
                }).then(res => console.log("Harvested!", res))
                .catch(err => console.log(err));
        });
    };

    return (
        <button style={style} onClick={harvestField} >{label}</button>
    )
}

const style = {
    backgroundColor: "OrangeRed",
};

export default ButtonHarvest;
