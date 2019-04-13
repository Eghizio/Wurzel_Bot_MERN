import React from 'react'
import ConsumerFactory from "../ContextAPI/ConsumerFactory";
import Field from './Field';

const Garden = ({context}) => {

    const rows = []; //17x12
    for(let r=1; r<=204; r++) //fields indexed from 1
        rows.push(<Field key={r} contextAPI={context} fieldID={r} />);

    return (
        <div style={gridContainer}>
            {rows}
        </div>
    )
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

export default ConsumerFactory(Garden);
