import React from 'react';
import ReactDOM from 'react-dom';

import { SingleRow } from './singleRow.jsx';

export class TouristList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touristListEl: this.props.newTuristRow
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            touristListEl: nextProps.newTuristRow
        }, () => { console.log('tablica w newTouristRow', this.state.touristListEl) })
    }
    removedElements = (index) => {
        const touristListEl = this.state.touristListEl.filter((elem, tourElIndex) => {
            return tourElIndex !== index
        })
        this.setState({ touristListEl })
    }
    render() {
        return (
            <div>
                {this.state.touristListEl !== undefined &&
                    this.state.touristListEl.map((e) => {
                        console.log(e.name);
                        console.log('map');
                        return <SingleRow removeEl={this.removedElements} elemToRemove={this.state.touristListEl} newElName={e.name} newElLastName={e.lastName} newElSex={e.sex} newElCountry={e.country} newElBirthDate={e.birthDate} newElFlight={e.flight} newElNote={e.notes} id={e.id} />
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(
    <TouristList />,
    document.getElementById('app')
);