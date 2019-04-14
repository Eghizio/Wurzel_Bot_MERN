import React from 'react'

const ButtonX = (props) => {

    const { contextAPI: ctx } = props;

    return (
        <button style={style} onClick={() => ctx.select({type: null})} >X</button>
    )
}

//pushes InfoLabel a little bit left ;/
const style = {
    margin: "4px",
    padding: "4px 7px",
    backgroundColor: "red",
    border: "none",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    float: "right",
    // display: "none"
};

export default ButtonX;
