import React, { useState } from 'react'

const Field = (props) => { // eslint-disable-next-line
    const [state, setState] = useState({type: "Field", ...props.field});

    // componentDidMount(){
    //   //update state from db, as for now default 
    //   //or should the Context get that data and field would fetch??
    //   //tho why would we need a proxy tbh. 
    //   //let Context req field data each time it needs it
    //   this.setState({
    //     type: "Field",
    //     plantID: null,
    //     watered: false
    //   });
    // }
    
    const hover = (id) => {
      // console.log(`${id} Hovered`);

      //display popup somewhere around(above or under the field) 
      //or simply info instead of click?
      //will be possible to turn off the hover option //might be irritating after a while
      //or display(fade in) after few seconds of hovering (maybe 3-5 sec?)
    }

    /* 
      grass/plantedImage 
      onHover: Field Data Popup 
      onClick: InfoTab
    */


    const ctx = props.contextAPI;
    const { id } = state;

    return (
      <div  style={style} 
            onClick={ () => ctx.select(state) }
            onMouseOver={ () => hover(id) } >
      </div>
    );
}

const style = {
  // width: "20px",
  // height: "20px",
  backgroundColor: "lime",
  border: "2px solid red",
  // margin: "3px"
};


export default Field;
