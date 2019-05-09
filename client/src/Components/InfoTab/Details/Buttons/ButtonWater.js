import React from 'react'
import axios from "axios";

const ButtonWater = (props) => {

    //IVE JUST REALISED I GOT LOGIC IMPLEMENTED
    //IN A FUCKING BUTTON XD
    //might just set onClick in the detail component
    //Water specific field / all fields
    const waterField = () => { 
        axios.patch("/api/fields", {
            id: props.field, //single field as for now
            isWatered: {
                state: true,
                time_watered: Date.now()
            }
        }).then(res => console.log(res.body))
        .catch(err => console.log(err));
        // console.log(plant)
    };
    //handler for watering based on props
    return (
        <button style={style} onClick={waterField} >{props.label}</button>
    )
}

const style = {
    backgroundColor: "lightBlue",
};

export default ButtonWater;
