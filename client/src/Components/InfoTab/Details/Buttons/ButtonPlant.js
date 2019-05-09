import React from 'react'
import axios from "axios";

const ButtonPlant = (props) => {

    //recieve plant from select props.plant
    //Plant specific field / all fields
    const plantField = (plant) => { //conditional type req or seperate components?
        axios.patch("/api/fields", {
            id: 1,
            plant: {
                id: plant.value,
                name: plant.name,
                time_planted: Date.now()
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err));
        // console.log(plant)
    };

    //handler for planting based on props
    return (
        <button style={style} onClick={() => plantField(props.plant)} >{props.label}</button>
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