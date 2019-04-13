import React from "react";
import { Consumer } from "./Provider";

function ConsumerFactory(ReceivingComponent){
    return (props) => (
        <Consumer>
            { ctx => <ReceivingComponent { ...props } context={ ctx } /> }
        </Consumer>
    );
}

export default ConsumerFactory;