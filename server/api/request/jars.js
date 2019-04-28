//Route "/fields"
const express = require("express");
const router = express.Router();
//MongoDB Models
const Jar = require("../../../db/models/Jar");

router.get("/", (req, res) => {
    Jar.getJars()
        .then(jars => res.json(jars))
        .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
    Jar.getJar({ id: req.params.id })
        .then(jar => res.json(jar))
        .catch(err => console.log(err));
});

router.post("/", (req, res) => {
    Jar.createJar({
        id: req.body.id,
        plant: req.body.plant,
        amount: req.body.amount
    })
        .then(newJar => res.json(newJar))
        .catch(err => console.log(err));//error on creation, front needs to know WIP
});

router.patch("/", (req, res) => {
    Jar.setJar({id: req.body.id}, {
        amount: req.body.amount //we will be only updating amount
    })
        .then(updatedJar => res.json(updatedJar))
        .catch(err => console.log(err));
});

router.delete("/", (req, res) => {
    Jar.removeJar({id: req.body.id})
        .then(deletedJar => res.json(deletedJar))
        .catch(err => console.log(err));
});

module.exports = router;