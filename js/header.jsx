import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
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
            <header>
                <h1>Space tourist flights management!</h1>
                <button onClick={this.showTouristPortal}>Tourists</button>
                <button>Flights</button>
            </header>
        )
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('app')
);
