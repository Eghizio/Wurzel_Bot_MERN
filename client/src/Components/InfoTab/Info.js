import React from 'react'
import { Consumer } from "../ContextAPI/Provider";

const Info = () => {
    return (
        <Consumer>
            {ctx => (
                <div style={style}> 
                  <h2>
                    {ctx.selectedField ? `Field ${ctx.selectedField}` : "Garden"}
                  </h2>
                </div>
            )}
        </Consumer>
    )
}


const style = {
    border: "5px solid red",
    textAlign: "center"
};

export default Info;

