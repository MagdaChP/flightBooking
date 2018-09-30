import React from 'react';
import ReactDOM from 'react-dom';

export class Flights extends React.Component {
    render () {
        return (
            <div>Flights </div>
        )
    }
}

ReactDOM.render(
    <Flights />,
    document.getElementById('app')
);