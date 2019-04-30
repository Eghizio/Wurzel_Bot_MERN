import React from 'react'

const DetailsJar = (props) => {
    const { type, id, plant, amount } = props.jar;
    return (
        <>
            {/* the <p> tags are just as placeholders, will style and use semantics later */}
            <p>Name: {plant.name}</p>
            <p>Quantity: {amount}</p>
        </>
    )
}

export default DetailsJar;
