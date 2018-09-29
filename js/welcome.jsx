import React from 'react';
import ReactDOM from 'react-dom';

export class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p> Select proper action from above.</p>
        )
    }
} 

ReactDOM.render (
    <Welcome/>,
    document.getElementById('app')
);