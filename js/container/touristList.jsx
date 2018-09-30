import React from 'react';
import ReactDOM from 'react-dom';

import { SingleRow } from './singleRow.jsx';

export class TouristList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touristListEl: this.props.newTuristRow
        }
        console.log('dgdfxgb', this.state.touristListEl)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            touristListEl: nextProps.newTuristRow
        }, () => { console.log('tablica w newTouristRow', this.state.touristListEl.lenght) })
    }
    render() {
        return (
            <ul>
                <li>pierwszy</li>
                <SingleRow />
            </ul>
        )
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Last Name</th>
        //             <th>Gender</th>
        //             <th>Country</th>
        //             <th>Birth Date</th>
        //             <th>Flight</th>
        //             <th>Notes</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>Magda</td>
        //             <td>Chorzępa</td>
        //         </tr>
        //         <tr>
        //             {this.props.newTouristRow.map((elem) => {

        //             })}
        //         </tr>
        //     </tbody>
        // </table>
    }
}

ReactDOM.render(
    <TouristList />,
    document.getElementById('app')
);