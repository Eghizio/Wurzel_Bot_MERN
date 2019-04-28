const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/wurzel";
const Field = require("./models/Field");
const Jar = require("./models/Jar");


mongoose.connect(mongoURL, {useNewUrlParser: true, useFindAndModify: false })
    .then( () => console.log("Connected to MongoDB!"))
    .catch( () => console.log("Can't connect to MongoDB!"));

const mongoDB = mongoose.connections[0];

Field.countDocuments({}, (err, count) => {
    if(count === 0)
        Field.Init();
});

module.exports = mongoDB;