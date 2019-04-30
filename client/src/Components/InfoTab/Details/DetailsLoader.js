import React from 'react'
import DetailsField from "./DetailsField";
import DetailsJar from "./DetailsJar";
import DetailsGarden from "./DetailsGarden";

const DetailsLoader = (props) => {

    const style = {
        border: "5px solid cyan",
        textAlign: "center",
    };

    const { type: detail } = props.contextItem;

    return (
        <div style={style}>
            {(() => {
                switch(detail) {
                case 'Field':
                    return <DetailsField field={ props.contextItem }/>;
                case 'Jar':
                    return <DetailsJar jar={ props.contextItem }/>;
                case null:
                default:
                    return <DetailsGarden />;
                }
            })()}
        </div>
    )
}

export default DetailsLoader;
