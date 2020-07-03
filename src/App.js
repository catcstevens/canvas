import React, { Component } from 'react';
import ColourSelector from './components/ColourSelector'

class App extends Component {
    render() {
        return (
            <div>
                <h1> Welcome To Your Drawing Pad </h1>
                <ColourSelector />
            </div>
        );
    }
}

export default App;