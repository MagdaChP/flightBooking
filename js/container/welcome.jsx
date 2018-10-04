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
                <p className='welcomeText'> Select proper action from below:</p>
                <div className='mainBtns'>
                <Button handleBtnClick={this.showTouristPortal}  btnName='Tourists' className='toutistBtn'/>
                <Button btnName='Flights' className='flightsBtn'/>
                </div>
            </div>

        )
    }
}

ReactDOM.render(
    <Welcome />,
    document.getElementById('app')
);