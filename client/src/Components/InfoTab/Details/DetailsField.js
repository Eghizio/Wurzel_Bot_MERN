import React from 'react';
import SelectPlant from "./SelectPlant";
import ButtonPlant from "./Buttons/ButtonPlant";
import ButtonHarvest from "./Buttons/ButtonHarvest";
import ButtonWater from "./Buttons/ButtonWater";

const DetailsField = (props) => {
    const { type, id, plant, watered } = props.contextItem;
    return (
        <>
            <p>{type} {id} details</p>
            {/* the <p> tags are just as placeholders, will style and use semantics later */}
            <p>Plant: {plant|| "none."}</p>
            <p>Plant is {watered? null:"not"} watered!</p>
            {/* The buttons will be moved to the overall directory where they can be reused */}
            <SelectPlant />
            <ButtonPlant label={"Plant"} plant={"SelectPlant value"} />
            <ButtonHarvest label={"Harvest"}/>
            <ButtonWater label={"Water"}/>
        </>
    )
}

export default DetailsField;
