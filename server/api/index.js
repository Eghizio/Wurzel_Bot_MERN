const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // res.type("text/html"); //will serve a menu page with all endpoints or smthin 
    const menu = {
        "/api": {
            "/plants": "",
            "/plant": {
                "/id/:id": "/id/number",
                "/name/:name": "/name/string",
                "?query=value": {
                    "id": "number",
                    "name": "string",
                    "time": "number",
                    "crop": "number",
                    "sx": "number",
                    "sy": "number",
                    "level": "number"
                }
            }
        }
    };
    res.type("application/json");
    res.send(menu);
});

module.exports = router;