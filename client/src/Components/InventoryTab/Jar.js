import React, { Component } from 'react'
import axios from "axios";

export class Jar extends Component {
    constructor(props){
        super(props);

        this.state = {
            type: "Jar",
            
            // id: this.props.dummyID,
            // name: "Foo Flower",
            // quantity: 1337
        };

        axios.get(`/api/jars/${this.props.dummyID}`)
            .then(res => res.data)
            .then(jar => this.setState({...jar}))
            .catch(err => console.log(err));
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
