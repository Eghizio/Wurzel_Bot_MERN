import React from 'react'
import ConsumerFactory from "../ContextAPI/ConsumerFactory";

const Info = ({context}) => {
    return (
        <div style={style}> 
            <h2>
                {context.selectedField ? `Field ${context.selectedField}` : "Garden"}
            </h2>
        </div>
    )
};

const style = {
    border: "5px solid red",
    textAlign: "center"
};

export default ConsumerFactory(Info);

