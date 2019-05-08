import React from 'react';
import SelectPlant from "./SelectPlant";
import ButtonPlant from "./Buttons/ButtonPlant";
import ButtonHarvest from "./Buttons/ButtonHarvest";
import ButtonWater from "./Buttons/ButtonWater";

const DetailsField = (props) => {
    const { /*type, id, */plant, isWatered } = props.field;

    const selectPlant = (event) => selectedPlant = event.target.value;
    let selectedPlant = selectPlant || "6";

    return (
        <>
            {/* the <p> tags are just as placeholders, will style and use semantics later */}
            <p>{plant? (plant.name? plant.name:"Field not planted") : "Field not planted"}</p>
            <p>Field is {isWatered.state? null:"not"} watered!</p>
            {/* The buttons will be moved to the overall directory where they can be reused */}
            <SelectPlant selectPlant={selectPlant} />
            <ButtonPlant label={"Plant"} plant={selectedPlant} />
            <ButtonHarvest label={"Harvest"}/>
            <ButtonWater label={"Water"}/>
        </>
    )
}

export default DetailsField;
