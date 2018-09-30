import React from 'react';
import ReactDOM from 'react-dom';

import { NewTourists } from './newTourists.jsx';

export class SingleRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <span>single row </span>
        )
    }
}

ReactDOM.render(
    <SingleRow />,
    document.getElementById('app')
);