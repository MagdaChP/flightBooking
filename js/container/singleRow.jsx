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
        this.removeMethod(e.target.id)
    }
    removeMethod(id) {
        console.log('id', id)
        // console.log('key',this.key)
        // console.log('elemtoRemove', this.props.elemToRemove);
        // console.log('button delete')
        // this.props.elemToRemove.map((elem, i) => {
        //     console.log('poj obiekt', elemToRemove[elem])
        //     if (this.props.key === elemToRemove[elem].id){
        //         return i;
        //     }
        // })
        // // elemToRemove !== undefined && elemToRemove(i)
        // if (typeof this.props.removeEl == 'function') {
        //     console.log('removeEl jest funkcją');
        //     this.props.removeEl(i);
        // }
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
                            <td><Button key={this.props.id} removeBtn={this.removeMethod} handleBtnClick={this.handleClick} /> </td>
                            <td><button>Edit</button></td>
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