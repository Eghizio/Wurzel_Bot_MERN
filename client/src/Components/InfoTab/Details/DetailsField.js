import React, { useState } from 'react';
import SelectPlant from "./SelectPlant";
import ButtonPlant from "./Buttons/ButtonPlant";
import ButtonHarvest from "./Buttons/ButtonHarvest";
import ButtonWater from "./Buttons/ButtonWater";

const DetailsField = (props) => {
    const { /*type, */id, plant, isWatered } = props.field;
    const [selectedPlant, setPlant] = useState({ value: 6, name: "Marchew" });

    const selectPlant = (event) => {
        let selected_plant = {
            value: Number(event.target.value),
            name: event.target.options[event.target.selectedIndex].text
        };
        setPlant(selected_plant);
        return selected_plant;
    };
    
    //handle plant/water/harvest button here for single field or conditionaly in btn comps?

    return (
        <>
            {/* the <p> tags are just as placeholders, will style and use semantics later */}
            <p>{plant? (plant.name? plant.name:"Field not planted") : "Field not planted"}</p>
            <p>Field is {isWatered.state? null:"not"} watered!</p>
            <SelectPlant selectPlant={selectPlant} />
            <ButtonPlant label={"Plant"} fields={[id]} plant={selectedPlant} />
            <ButtonWater label={"Water"} fields={[id]} />
            <ButtonHarvest label={"Harvest"} fields={[id]} plant={plant} />
        </>
    )
}

export default DetailsField;
