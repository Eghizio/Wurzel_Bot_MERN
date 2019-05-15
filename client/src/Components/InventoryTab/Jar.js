import React, { useState } from 'react'

const Jar = (props) => { // eslint-disable-next-line
    const [state, setState] = useState({type: "Jar", ...props.jar});

        const ctx = props.contextAPI;
        
        return (
        <div style={style} onClick={() => ctx.select(state) }>
            <div style={plantImg}></div>
        </div>
        )
};

const style = {
    border: "1px solid black",
    backgroundColor: "green",

    width: "41px",
    height: "51px",
    backgroundImage: "url(http://pics.wurzelimperium.de/pics/lager/glas1.gif)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0px -3px",
};

const plantImg = {
    width: "32px",
    height: "24px",
    backgroundImage: "url(http://pics.wurzelimperium.de/pics/maps/etikett_map.85.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-48px 0px",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "19px",
};
export default Jar;
