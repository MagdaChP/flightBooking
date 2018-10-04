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
            <div>
            <button id={this.props.key} onClick={this.props.handleBtnClick} className={this.props.className}>{this.props.btnName}</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('app')
);