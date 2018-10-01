import React from 'react';
import ReactDOM from 'react-dom';

import { NewTourists } from './newTourists.jsx';

export class SingleRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         newTextObj: nextProps.newElText
    //     }, () => { console.log('tablica w SingleRow', this.state.newTextObj.length) })
    // }
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