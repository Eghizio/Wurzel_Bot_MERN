import React, { Component } from 'react'
import Field from './Field';

//can become functional component
export class Garden extends Component {

    render() {
        //17x12
        const rows = [];

        for(let r=1; r<=204; r++)
            rows.push(<Field key={r} fieldID={r} />);

    return (
        <div style={gridContainer}>
            {rows}
        </div>
    )
  }
}

const gridContainer = {
    border: "5px solid green",
    // width: "auto",

    display: "inline-grid",
    gridTemplateColumns: "repeat(17, minmax(20px, 40px))",
    gridTemplateRows: "repeat(12, minmax(20px, 40px))",
    
    gridGap: "5px",
    justifyContent: "center" //space-around?
};

export default Garden;
