const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // res.type("text/html"); //will serve a menu page with all endpoints or smthin 
    const menu = {
        "/api": {
            "path": "example",
            "/plant": "",
            "/plants": ""
        }
    };
    res.type("application/json");
    res.app.set("json spaces", 2); //is it possible to set it for certain responses?
    res.send(menu);
    res.app.set("json spaces", 0);
});

module.exports = router;
