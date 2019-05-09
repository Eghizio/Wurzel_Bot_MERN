//Route "/fields"
const express = require("express");
const router = express.Router();
//MongoDB Models
const Field = require("../../db/models/Field");

router.get("/", (req, res) => {
    Field.getFields()
        .then(allFields => res.json(allFields))
        .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
    Field.getField({ id: req.params.id })
        .then(field => res.json(field))
        .catch(err => console.log(err));
});

router.patch("/", (req, res) => {
    Field.setField({ id: req.body.id }, {
        ...(req.body.plant && {plant: req.body.plant}),
        ...(req.body.isWatered && {isWatered: req.body.isWatered})
    })
        .then(updatedField => res.json(updatedField))
        .catch(err => console.log(err));
});

module.exports = router;