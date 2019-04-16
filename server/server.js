const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//Routings
const index = require("./api/index");
const plant = require("./api/plants/plant");
const plants = require("./api/plants/plants");

//Database
mongoose
    .connect("mongodb://localhost:27017/wurzel", {useNewUrlParser: true})
    .then( () => console.log("Connected to MongoDB!"))
    .catch( () => console.log("Can't connect to MongoDB!"));
const db = mongoose.connections;

//Application
const app = express();

app.set("title", "WurzelAPI");

//Middleware
app.use(bodyParser.json());


//Query to lower middleware
// app.use((req, res, next) => {
//     for(let key in req.query)
//         req.query[key] = req.query[key].toLowerCase(); 
//     //crashes at multiple name values ex: plants/q?name=CEBULE&name=marchew
//     next();
// });

//Routes
app.use("/", index); //home
app.use("/plant", plant); //cries in DRY xd
app.use("/plants", plants);

//PORT & init
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}... ${Date()}`));
