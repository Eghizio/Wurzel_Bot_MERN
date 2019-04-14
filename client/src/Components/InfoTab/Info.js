import React from 'react'
import ConsumerFactory from "../ContextAPI/ConsumerFactory";
import ButtonX from "./Buttons/ButtonX";
import DetailsLoader from "./Details/DetailsLoader";

const Info = ({context}) => {

    // selectedItem ? render Item info : render Garden overall info
    const { type, id } = context.selectedItem; 

    return (
        <aside style={style}> 
            <div>
                <h2 style={Label} >
                    {type ? `${type} ${id}` : "Garden"}
                </h2>
                <ButtonX contextAPI={context} />
            </div>
            <DetailsLoader contextItem={context.selectedItem} />
        </aside>
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

