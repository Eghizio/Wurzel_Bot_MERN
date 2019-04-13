import React from 'react'
import ConsumerFactory from "../ContextAPI/ConsumerFactory";
import ButtonX from "./Button/ButtonX";
import Details from "./Details";

const Info = ({context}) => {

    // selectedItem ? render Item info : render Garden overall info
    const { selectedItem:item } = context;

    return (
        <div style={style}> 
            <div>
                <h2 style={Label} >
                    {item ? `${item.type} ${item.fieldID || item.ID}` : "Garden"}
                </h2>
                <ButtonX contextAPI={context} />
            </div>
            <Details contextItem={context.selectedItem} />
        </div>
    )
};

const style = {
    border: "5px solid red",
    textAlign: "center",

    display: "inline-grid",
    gridTemplateRows: "1fr 7fr",
};

const Label = {
    display: "inline-block",
};

export default ConsumerFactory(Info);

