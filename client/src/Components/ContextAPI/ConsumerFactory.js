import React from "react";
import { Consumer } from "./Provider";

const ConsumerFactory = (ReceivingComponent) => {
    return (props) => (
        <Consumer>
            { ctx => <ReceivingComponent { ...props } context={ ctx } /> }
        </Consumer>
    );
}

export default ConsumerFactory;