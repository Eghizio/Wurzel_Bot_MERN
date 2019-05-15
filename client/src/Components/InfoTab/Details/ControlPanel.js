import React from "react";
import SelectPlant from "./SelectPlant";
import ButtonPlant from "./Buttons/ButtonPlant";
import ButtonWater from "./Buttons/ButtonWater";
import ButtonHarvest from "./Buttons/ButtonHarvest";

/*
    
*/

const ControlPanel = ({selectPlant, labelPlant, labelWater, labelDRY, fields, plant}) => {

    return (
        <>
            <SelectPlant selectPlant={selectPlant} />
            <ButtonPlant label={"Plant"} fields={[id]} plant={selectedPlant} />
            <ButtonWater label={"Water"} fields={[id]} />
            <ButtonHarvest label={"Harvest"} fields={[id]} plant={plant} />
        </>
    );
};