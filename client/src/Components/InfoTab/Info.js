import React from 'react'
import ConsumerFactory from "../ContextAPI/ConsumerFactory";
import Details from "./Details";

const Info = ({context}) => {

    // const { fieldID } = context;
    // console.log(`Info: ${context}`);

    // selectedItem ? render Item info : render Garden overall info
    return (
        <div style={style}> 
            <div>
                <h2>
                    {context.selectedItem ? `${context.selectedItem.type} ${context.selectedItem.fieldID || context.selectedItem.ID}` : "Garden"}
                </h2>
                {/* X BUTTON */}
            </div>
            <Details item={context.selectedItem} />
        </div>
    )
};

const style = {
    border: "5px solid red",
    textAlign: "center",

    display: "inline-grid",
    gridTemplateRows: "1fr 7fr",


};

export default ConsumerFactory(Info);

