import React, { Component } from 'react'
import axios from "axios";

export class Jar extends Component {
    constructor(props){
        super(props);

        this.state = {
            type: "Jar",
            ...props.jar
            // id: this.props.dummyID,
            // name: "Foo Flower",
            // quantity: 1337
        };
    }

    render() {
        const ctx = this.props.contextAPI;
        return (
        <div style={style} onClick={() => ctx.select(this.state) }>
            <div style={plantImg}></div>
        </div>
        )
    }
}

const style = {
    border: "1px solid black",
    backgroundColor: "green",

    width: "41px",
    height: "51px",
    backgroundImage: "url(http://pics.wurzelimperium.de/pics/lager/glas1.gif)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0px -3px",
};

const plantImg = {
    width: "32px",
    height: "24px",
    backgroundImage: "url(http://pics.wurzelimperium.de/pics/maps/etikett_map.85.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-48px 0px",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "19px",
};
export default Jar;
