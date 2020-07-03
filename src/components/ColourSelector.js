import React from 'react';
// import Canvas from './Canvas';

const ColourSelector = (props) => {

    const hex = props.hex
    function onInputChange(event) {
        const onColourSelectorChange = props.onColourSelectorChange
        onColourSelectorChange(event.target.value)
    }
    return (
        <input
            type='color'
            value={hex}
            onChange={onInputChange}
            />
    )
}
// class ColourSelector extends Component {



//     state = { hex: this.props.hex };

//     onInputChange = (event) => {
//         console.log(event.target.value);
//         this.setState({hex: event.target.value});
//     }

//     componentDidMount() {
//         console.log(this.state.hex);
//     }

//     render(){
//         const { hex } =this.state;

//     }
// }

// ColourSelector.defaultProps = {
//     hex: "#00ffff"
// }

export default ColourSelector;