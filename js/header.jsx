import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header> 
                <h1>discover the universe</h1>
                <h2>~ Space tourist flights management ~</h2>
            </header>
        )
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('app')
);
