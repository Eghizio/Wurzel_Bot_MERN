import React from 'react'
import axios from "axios";

const ButtonHarvest = ({label, fields}) => {

    const harvestField = () => {
        fields.forEach(field =>
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
            .catch(err => console.log(err))
        );
    };

    return (
        <button style={style} onClick={harvestField} >{label}</button>
    )
}

const style = {
    backgroundColor: "OrangeRed",
};

export default ButtonHarvest;
