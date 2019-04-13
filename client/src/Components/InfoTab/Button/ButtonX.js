import React, { Component } from 'react'

export class ButtonX extends Component {

    handler = () => {
        this.props.contextAPI.selectedItem = null;
        console.log("Button clicked! new contextAPI:", this.props.contextAPI);
    }

    //ISSUE: Components do not re-render after context state change

    render() {

        return (
            <button style={style} onClick={this.handler} >X</button>
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
