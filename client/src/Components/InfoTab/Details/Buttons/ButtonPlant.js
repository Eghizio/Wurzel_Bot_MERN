import React from 'react'
import axios from "axios";

const ButtonPlant = ({label, fields, plant}) => {

    const plantField = () => { //TODO req game plant, handle => update UI and call API to update DB
        fields.forEach(field =>
            axios.patch("/api/fields", {
                id: field,
                plant: {
                    id: plant.value,
                    name: plant.name,
                    time_planted: Date.now()
                }
            }).then(res => console.log("Planted", res))
            .catch(err => console.log(err))
        );
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