import React from 'react'

const Title = (props) => {
    const title = props.title
    function onChangeInputText(event) {
        const onTitleChange = props.onTitleChange
        onTitleChange(event.target.value)
    }
    return (
        <input value={title} type="text" onChange={onChangeInputText} />
    )
}
export default Title