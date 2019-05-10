import React from 'react'
import axios from "axios";

const ButtonWater = ({label, fields}) => {

    //IVE JUST REALISED I GOT LOGIC IMPLEMENTED
    //IN A FUCKING BUTTON XD
    //might just set onClick in the detail component

    const waterField = () => { 
        fields.forEach(field => 
            axios.patch("/api/fields", {
                id: field,
                isWatered: {
                    state: true,
                    time_watered: Date.now()
                }
            }).then(res => console.log("Watered!", res))
            .catch(err => console.log(err))
        );
    };

    return (
        <button style={style} onClick={waterField} >{label}</button>
    )
}

const style = {
    backgroundColor: "lightBlue",
};

export default ButtonWater;
