//Route "/plants"
const express = require("express");
const router = express.Router();
const plants_data = require("../../data/plants_data");

router.get("/", (req, res) => {
    res.json(plants_data);
});

module.exports = router;