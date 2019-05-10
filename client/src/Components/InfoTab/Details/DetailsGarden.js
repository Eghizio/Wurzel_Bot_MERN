import React, { useState } from 'react'
import SelectPlant from "./SelectPlant";
import ButtonPlant from "./Buttons/ButtonPlant";
import ButtonHarvest from "./Buttons/ButtonHarvest";
import ButtonWater from "./Buttons/ButtonWater";

const DetailsGarden = (props) => {
    const [selectedPlant, setPlant] = useState({ value: 6, name: "Marchew" });

    const selectPlant = (event) => {
        let selected_plant = {
            value: Number(event.target.value),
            name: event.target.options[event.target.selectedIndex].text
        };
        setPlant(selected_plant);
        return selected_plant;
    };

    //handle plant/water/harvest button here for all fields or conditionaly in btn comps?

    const fields = [];
    for(let i=1; i<=204; i++) fields.push(i);

    return (
        <>
            <p>Garden details</p>
            {/* the <p> tags are just as placeholders, will style and use semantics later */}
            <p> Fields available: Bar / 204</p>
            <SelectPlant selectPlant={selectPlant} />
            <ButtonPlant label={"Plant Everything"} fields={fields} plant={selectedPlant}/>
            <ButtonWater label={"Water Everything"} fields={fields} />
            <ButtonHarvest label={"Harvest Everything"} fields={fields} plant={selectedPlant} />

        </>

    )
}

export default DetailsGarden;
