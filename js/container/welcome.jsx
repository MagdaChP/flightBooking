import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from './button.jsx';

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
                <p className='welcomeActionText'> Select proper action from below:</p>
                <div className='mainBtns'>
                    <Button handleBtnClick={this.showTouristPortal} btnName='Tourists' className='toutistBtn' />
                    <Button btnName='Flights' className='flightsBtn' />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        )
    }
}

ReactDOM.render(
    <Welcome />,
    document.getElementById('app')
);