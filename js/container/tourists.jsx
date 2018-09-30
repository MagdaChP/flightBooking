import React from 'react';
import ReactDOM from 'react-dom';

import { NewTourists } from './newTourists.jsx';
import { TouristList } from './touristList.jsx';

export class Tourists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewForm: false,
            newRow: ['newrow']
        }
        // console.log('new row w tourists', newRow)
    }
    newTouristForm = () => {
        this.setState({
            showNewForm: !this.state.showNewForm
        })
    }
    addNew = (newTourist) => {
        console.log('addNew', this.state);
        this.setState({
            newRow: this.state.newRow.concat(newTourist)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.newTouristForm}>New</button>
                {this.state.showNewForm && <NewTourists addNewMethod={this.addNew} />}
                <TouristList newTuristRow={this.state.newRow} />
            </div>
        )
    }
}

ReactDOM.render(
    <Tourists />,
    document.getElementById('app')
);