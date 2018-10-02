import React from 'react';
import ReactDOM from 'react-dom';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <button id={this.props.key} onClick={this.props.handleBtnClick}>delete</button>
        )
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('app')
);