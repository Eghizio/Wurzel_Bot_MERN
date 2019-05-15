import React, { useState, useEffect } from 'react'
import ConsumerFactory from "../ContextAPI/ConsumerFactory";
import Field from './Field';
import Loader from "../Loader/Loader";
import axios from "axios";

const Garden = ({context}) => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        axios.get("/api/fields")
            .then(res => res.data)
            .then(fields =>
                setFields(fields.map(field => 
                    <Field key={field.id} contextAPI={context} field={field} /> )))
            .catch(err => console.log("ERROR", err));
    }, []);

    return (
        <main style={gridContainer}>
            {fields.length === 0? <Loader/> : fields} {/* grid messes the position */}
        </main>
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
