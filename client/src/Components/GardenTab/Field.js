import React, { Component } from 'react'
import { Consumer } from "../ContextAPI/Provider";

export class Field extends Component {
  constructor(props){
    super(props);
    this.state = {
      fieldID: props.fieldID,
      plantID: null,
      watered: false
    };
  }

  componentDidMount(){
    //update state from db, as for now default
    this.setState({
      plantID: null,
      watered: false
    });
  }

  selectField(id){
    console.log(`${id} Clicked`);
    //send selected field id to InfoTab
    //Field>Garden>App>Info ?
    //Context? Redux?
  }
  
  hover(id){
    console.log(`${id} Hovered`);
    //display popup somewhere around(above or under the field) 
    //or simply info instead of click?
    //will be possible to turn off the hover option 
    //or display(fade in) after few seconds of hovering (maybe 3-5 sec?)
  }
  
    render() {
      const { fieldID: id } = this.state;

    return (
      <Consumer>
        {ctx => (
          <div style={style} 
          onClick={ () => ctx.handleClick(id) }
          onMouseOver={() => this.hover(id) } >
          </div>
        )}
      </Consumer>
        /* 
        grass/plantedImage 
        onHover: Field Data Popup 
        onClick: InfoTab
        */
      
    )
  }
}

const style = {
  // width: "20px",
  // height: "20px",
  backgroundColor: "lime",
  border: "2px solid red",
  // margin: "3px"
};


export default Field;
