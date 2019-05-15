import React from 'react'
import axios from "axios";

const ButtonPlant = ({label, fields, plant}) => {

    const plant_url = (field_id, plant_id) =>
    "http://s21.zieloneimperium.pl/save/"+
    "pflanz.php?"+
    "pflanze[]="+plant_id+"&feld[]="+field_id+"&felder[]="+field_id+
    "&cid=dd4874652cde2f4b18337fd899ad5598&garden=1";

    const plantField = () => { //TODO req game plant, handle => update UI and call API to update DB
        fields.forEach(field => {
            new Image().src = plant_url(field, plant.value); //no err handling

                axios.patch("/api/fields", {
                    id: field,
                    plant: {
                        id: plant.value,
                        name: plant.name,
                        time_planted: Date.now()
                    }
                }).then(res => console.log("Planted", res))
                .catch(err => console.log(err));
        });

         
    };

    return (
        <button style={style} onClick={plantField} >{label}</button>
    )
}

const style = {
    backgroundColor: "OrangeRed",
};

export default ButtonPlant;

/*

    id: { type: Number, required: true },
    plant: {
        id: { type: Number, default: null },
        name: { type: String, default: null },
        time_planted: { type: Number, default: null} //UNIX Time
    }, //plant object with id and time planted
    isWatered: {
        state: { type: Boolean, default: false },
        time_watered: { type: Number, default: null}//UNIX Time
    }, //watered object with false or time watered
}
*/