import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <span>Simple Application</span>
            </div>
        )
    }
}

ReactDOM.render(
    <Footer />,
    document.getElementById('app')
)
