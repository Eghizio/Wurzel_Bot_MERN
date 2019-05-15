import React from 'react'
import axios from "axios";

const ButtonWater = ({label, fields}) => {

    //IVE JUST REALISED I GOT LOGIC IMPLEMENTED
    //IN A FUCKING BUTTON XD
    //might just set onClick in the detail component

    const water_url = (field_id) =>
    "http://s21.zieloneimperium.pl/save/"+
    "wasser.php?"+
    "feld[]="+field_id+"&felder[]="+field_id+
    "&cid=dd4874652cde2f4b18337fd899ad5598&garden=1";

    const waterField = () => { 
        fields.forEach(field => {
            new Image().src = water_url(field);  //no err handling
                
                axios.patch("/api/fields", {
                    id: field,
                    isWatered: {
                        state: true,
                        time_watered: Date.now()
                    }
                }).then(res => console.log("Watered!", res))
                .catch(err => console.log(err));
        });
    };

    return (
        <button style={style} onClick={waterField} >{label}</button>
    )
}

const style = {
    backgroundColor: "lightBlue",
};

export default ButtonWater;
