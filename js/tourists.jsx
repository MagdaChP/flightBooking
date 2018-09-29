import React from 'react';
import ReactDOM from 'react-dom';

export class Tourists extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p> Tourists dsfnhmn vb</p>
        )
    }
} 

ReactDOM.render (
    <Tourists/>,
    document.getElementById('app')
);