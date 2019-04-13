import React, { Component } from 'react'

export class Jar extends Component {
    constructor(props){
        super(props);

        this.state = {
            type: "Jar",
            ID: this.props.dummyID
        };
    }

    render() {
        const ctx = this.props.contextAPI;
        return (
        <div style={style} onClick={() => ctx.select(this.state) }>
            
        </div>
        )
    }
}

const style = {
    border: "1px solid black",
    backgroundColor: "green",
};

export default Jar;
