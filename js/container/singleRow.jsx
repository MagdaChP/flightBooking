import React from 'react';
import ReactDOM from 'react-dom';

import { NewTourists } from './newTourists.jsx';
import { Button } from './button.jsx';

export class SingleRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    handleClick = (e) => {
        const buttonId = this.props.id;
        console.log('handle click id', this.props.id)
        this.removeMethod(e.target, buttonId)
    }
    removeMethod(elem, id) {
        console.log('id', id, elem);
        let index
        this.props.elemToRemove.map((e, i) => {
            console.log(i, 'i wewn mapa')
            if (id == e.id) {
                index = i
            }
        })
        console.log('porównane i', index);
        // return index;
        if (typeof this.props.removeEl == 'function') {
            console.log('kliknięcie singleRow');
            this.props.removeEl(index);
        }

    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.props.newElName}</td>
                            <td>{this.props.newElLastName}</td>
                            <td>{this.props.newElSex}</td>
                            <td>{this.props.newElCountry}</td>
                            <td>{this.props.newElBirthDate}</td>
                            <td>{this.props.newElFlight}</td>
                            <td>{this.props.newElNote}</td>
                            {/* <td>{this.props.id}</td> */}
                            <td><Button key={this.props.id} removeBtn={this.removeMethod} handleBtnClick={this.handleClick} btnName='delete' /> </td>
                            <td><Button btnName='edit' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(
    <SingleRow />,
    document.getElementById('app')
);