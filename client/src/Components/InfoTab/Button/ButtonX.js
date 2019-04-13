import React, { Component } from 'react'

export class ButtonX extends Component {

    render() {

        const { contextAPI: ctx } = this.props;

        return (
            <button style={style} onClick={() => ctx.select(null)} >X</button>
        )
    }
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
