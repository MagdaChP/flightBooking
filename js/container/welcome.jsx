import React from 'react';
import ReactDOM from 'react-dom';

export class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    showTouristPortal = () => {
        console.log(this.props.history);
        this.props.history.push('/tourists');
        console.log(this.props.history.push);
    }
    render() {
        return (
            <div>
                <p> Select proper action from below.</p>
                <button onClick={this.showTouristPortal}>Tourists</button>
                <button>Flights</button>
            </div>

        )
    }
}

ReactDOM.render(
    <Welcome />,
    document.getElementById('app')
);