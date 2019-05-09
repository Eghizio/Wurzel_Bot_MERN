import React, { useState, useEffect } from 'react'
import ConsumerFactory from "../ContextAPI/ConsumerFactory";
import Jar from "./Jar";
import axios from "axios";

const Inventory = ({context}) => {
    const [jars, setJars] = useState([]);

    useEffect(() => {
        axios.get("/api/jars")
            .then(res => res.data)
            .then(jars => jars.sort((a,b) => a.id - b.id))
            .then(jars =>
                setJars(jars.map(jar => <Jar key={jar.id} contextAPI={context} jar={jar} /> )))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
      <div style={style}>
        <div>
          <h2>Inventory</h2>
        </div>

        <div style={jarsDiv}>
          {jars}
        </div>
      </div>
    )
}
//should the jarsdiv be another comp?

//4 items 5 layers(can be custom)
const style = {
    border: "5px solid blue",
    textAlign: "center",

    display: "inline-grid",
    gridTemplateRows: "1fr 7fr",

};

const jarsDiv = {
    padding: "10px",
    display: "inline-grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(7, 1fr)",
    gridGap: "10px",
    overflow: "scroll", //requires specified height ;/
};

export default ConsumerFactory(Inventory);
