import React from 'react'

const SelectPlant = (props) => {

    //spit out selected plant
    //fetch plant names and ids and construct the select dropdown

    return (
        <select>
            <option value="FooID">Foo</option>
            <option value="BarID">Bar</option>
            <option value="BazID">Baz</option>
            <option value="QuxID">Qux</option>
        </select>
    )
}

export default SelectPlant;
