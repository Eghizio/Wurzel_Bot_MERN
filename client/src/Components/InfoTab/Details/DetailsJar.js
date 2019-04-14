import React from 'react'

const DetailsJar = (props) => {
    const { type, id, name, quantity } = props.contextItem;
    return (
        <>
            <p>{type} {id} details</p>
            {/* the <p> tags are just as placeholders, will style and use semantics later */}
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
        </>
    )
}

export default DetailsJar;
