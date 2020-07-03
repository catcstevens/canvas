import React, { Component } from 'react';

class ColourSelector extends Component {
    render(){
        const { hex } =this.props;
        return (
            <input type='color' defaultValue={hex} />
        );
    }
}

export default ColourSelector;