import React, { Component } from 'react'

export class Field extends Component {
  constructor(props){
    super(props);
    //we can make abstract component out of that with "type" prop, and maybe "id" ?
    //tho how we distinguish the fieldID from plantID, maybe just itemID?
    //and then customize with cDidMount setState
    this.state = {
      type: "Field",
      fieldID: props.fieldID,
      plantID: null,
      watered: false
    };
  }

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
  
  hover(id){
    // console.log(`${id} Hovered`);

    //display popup somewhere around(above or under the field) 
    //or simply info instead of click?
    //will be possible to turn off the hover option //might be irritating after a while
    //or display(fade in) after few seconds of hovering (maybe 3-5 sec?)
  }
  
    render() {
      //later on we want to pass whole object, garden--field or shelf--plant(jar)
      const ctx = this.props.contextAPI;
      const { fieldID: id } = this.state;

    return (
      <div  style={style} 
            onClick={ () => ctx.select(this.state) }
            onMouseOver={() => this.hover(id) } >
      </div>

    );
        /* 
        grass/plantedImage 
        onHover: Field Data Popup 
        onClick: InfoTab
        */
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
