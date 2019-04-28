const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Field_Schema = new Schema({
    id: { type: Number, required: true },
    plant: {
        id: { type: Number, default: null },
        name: { type: String, default: null },
        time_planted: { type: Number, default: null} //UNIX Time
    }, //plant object with id and time planted
    isWatered: {
        state: { type: Boolean, default: false },
        time_watered: { type: Number, default: null}//UNIX Time
    }, //watered object with false or time watered
});

const Field = module.exports = mongoose.model("Field", Field_Schema);

//CRUD

//Create Field
module.exports.createField = (field_obj) => 
    Field.create(field_obj);

//Get Field
module.exports.getField = (field_obj) => 
    Field.findOne(field_obj);

//Update Field
module.exports.setField = (field_obj, new_field_obj) => 
    Field.findOneAndUpdate(field_obj, new_field_obj);

//Delete Field
module.exports.removeField = (field_obj) => 
    Field.findOneAndDelete(field_obj); //is it even needed tbh? we only get/update/init

//Get All Fields
module.exports.getFields = () => 
    Field.find();

//Init
module.exports.Init = () => {
    let fields = [];
    
    for(let i=1; i<=204; i++)
        fields.push(new Field( { id: i } ));

    Field.insertMany(fields);
};