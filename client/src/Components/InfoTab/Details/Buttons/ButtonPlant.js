import React from 'react'

const ButtonPlant = (props) => {

    //recieve plant from select props.plant
    //Plant specific field / all fields

    //handler for planting based on props
    return (
        <button style={style}>{props.label}</button>
    )
}

const style = {
    backgroundColor: "OrangeRed",
};

export default ButtonPlant;