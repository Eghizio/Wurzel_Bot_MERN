import React from 'react'
import ConsumerFactory from "../ContextAPI/ConsumerFactory";
import Jar from "./Jar";

//naming convention?? maybe just inventory?(not store coz will mix up with redux store)
const Shelf = ({context}) => {

    const jars = []; //todo: overflow, capacity etc
    for(let i=1; i<=30; i++) //if fields indexed from one then lets index the jars as well
      jars.push(<Jar key={i} contextAPI={context} dummyID={i} />);

    return (
      <div style={style}>
        <div>
          <h2>Shelf</h2>
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
};

export default ConsumerFactory(Shelf);
