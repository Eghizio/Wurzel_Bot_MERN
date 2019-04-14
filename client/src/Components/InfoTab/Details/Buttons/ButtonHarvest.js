import React from 'react'

const ButtonHarvest = (props) => {

    //Harvest specific field / all fields

    //handler for harvesting based on props
    return (
        <button style={style}>{props.label}</button>
    )
}

const style = {
    backgroundColor: "OrangeRed",
};

export default ButtonHarvest;
