import React, { Component } from 'react';
import ColourSelector from './ColourSelector';

class Canvas extends Component {
    state = { hex: '#00ffff'};

        componentDidMount() {
            console.log(this.state.hex);
        }

        onColourSelectorChange = (hex) => {
            this.setState ({ hex});
        }

    render() {
        const { hex } = this.state;
        return (
            <div> 
                <ColourSelector 
                    onColourSelectorChange={this.onColourSelectorChange}
                    hex={hex}
                />
            </div>
        );
    }
}

export default Canvas;