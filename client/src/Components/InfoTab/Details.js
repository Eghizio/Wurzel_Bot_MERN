import React, { Component } from 'react'

export class Details extends Component {

    render() {
        
        //we do not know now if its the field or jar, but we need to tho xd
        return (
        <div style={style}>
            <p>{ this.props.item ? `Details for ${this.props.item.fieldID || this.props.item.ID}` : null }</p>
        </div>
        )
    }
}

const style = {
    border: "5px solid cyan",
    textAlign: "center",
};

export default Details;
