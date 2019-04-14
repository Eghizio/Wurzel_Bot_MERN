import React from 'react'

const ButtonWater = (props) => {

    //Water specific field / all fields

    //handler for watering based on props
    return (
        <button style={style}>{props.label}</button>
    )
}

const style = {
    backgroundColor: "lightBlue",
};

export default ButtonWater;
