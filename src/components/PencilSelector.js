import React from 'react'

const PencilSelector = (props) => {
    const labelStyles = {
        paddingRight: ".5em"
    }
    const inputStyles = {
        width: "30px",
        paddingLeft: "5px"
    }
    const divStyles = {
        marginTop: "1em"
    }

    const thickness = props.thickness
    function onThicknessChange (event) {
        const onPencilSelectorChange = props.onPencilSelectorChange
        onPencilSelectorChange(event.target.value)
    }
    return (
        <div style={divStyles}>
            <label style={labelStyles}>Pencil thickness:</label>
            <input type="number" style={inputStyles} onChange={onThicknessChange} value={thickness}/>
        </div>
    )
}



export default PencilSelector;