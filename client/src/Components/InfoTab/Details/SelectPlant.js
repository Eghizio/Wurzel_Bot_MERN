import React, { useState, useEffect } from 'react';
import axios from "axios";

const SelectPlant = (props) => {
    const [plants, setPlants] = useState([]);
    const [select, setSelect] = useState({value: 6, name: "Marchew"});

    //spit out selected plant
    //fetch plant names and ids and construct the select dropdown

    useEffect(() => {
        axios.get("/api/plants")
            .then(res => res.data)
            .then(plants => 
                setPlants(plants.map(plant => <option key={plant.id} value={plant.id} >{plant.name}</option> )))
            .catch(err => {
                console.log(err);
                setPlants([<option key={0} value={0} >{"Failed to load plants"}</option>]);
            });
    }, []);

    return (
        <select value={select.value} onChange={(e) => setSelect(props.selectPlant(e))} >
            {plants}
        </select>
    )
}

export default SelectPlant;
