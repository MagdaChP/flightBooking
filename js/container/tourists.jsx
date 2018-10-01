import React from 'react';
import ReactDOM from 'react-dom';

import { NewTourists } from './newTourists.jsx';
import { TouristList } from './touristList.jsx';

export class Tourists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewForm: false,
            newRow: []
        }
    }
    newTouristForm = () => {
        this.setState({
            showNewForm: !this.state.showNewForm
        })
    }
    addNew = (newTourist) => {
        // console.log('new tourist object',newTourist)
        // console.log('addNew', this.state);
        this.setState({
            newRow: this.state.newRow.concat(newTourist)
        }, () => {
            console.log(this.state.newRow);
        })
    }
    render() {
        return (
            <div>
                {this.state.showNewForm && <NewTourists addNewMethod={this.addNew} />}
                <button onClick={this.newTouristForm}>New</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Country</th>
                            <th>Birth Date</th>
                            <th>Flight</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                </table>
                <TouristList newTuristRow={this.state.newRow} />
            </div>
        )
    }
}

ReactDOM.render(
    <Tourists />,
    document.getElementById('app')
);