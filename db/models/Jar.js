const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Jar_Schema = new Schema({
    id: Number,
    plant: Number, //plant obj with id name etc plus amount
    amount: Number
});

const Jar = module.exports = mongoose.model("Jar", Jar_Schema);

//CRUD

//Create Jar
module.exports.createJar = (jar_obj) => 
    Jar.create(jar_obj);

//Get Jar
module.exports.getJar = (jar_obj) => 
    Jar.findOne(jar_obj);

//Update Jar
module.exports.setJar = (jar_obj, new_jar_obj) => 
    Jar.findOneAndUpdate(jar_obj, new_jar_obj);

//Delete Jar
module.exports.removeJar = (jar_obj) => 
    Jar.findOneAndDelete(jar_obj);

//Get All Jars
module.exports.getJars = () => 
    Jar.find();