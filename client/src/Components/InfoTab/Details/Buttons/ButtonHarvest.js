import React from 'react'
import axios from "axios";

const ButtonHarvest = (props) => {

    //Harvest specific field / all fields
    const harvestField = () => { 
        axios.patch("/api/fields", {
            id: props.field, //single field as for now
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
        // console.log(plant)
    };

    return (
        <button style={style} onClick={harvestField} >{props.label}</button>
    )
}

const style = {
    backgroundColor: "OrangeRed",
};

export default ButtonHarvest;
