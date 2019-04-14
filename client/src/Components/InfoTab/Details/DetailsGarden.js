import React from 'react'
import SelectPlant from "./SelectPlant";
import ButtonPlant from "./Buttons/ButtonPlant";
import ButtonHarvest from "./Buttons/ButtonHarvest";
import ButtonWater from "./Buttons/ButtonWater";

const DetailsGarden = (props) => {

    //retrieve plant from SelectPlant

    return (
        <>
            <p>Garden details</p>
            {/* the <p> tags are just as placeholders, will style and use semantics later */}
            <p> Fields available: Bar / 204</p>
            <SelectPlant />
            <ButtonPlant label={"Plant Everything"} plant={"selectedPlant"}/>
            <ButtonHarvest label={"Harvest Everything"} />
            <ButtonWater label={"Water Everything"} />


        </>

    )
}

export default DetailsGarden;
