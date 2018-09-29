import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {
    render() {
        return (
            <span>Simple Application ;)</span>
        )
    }
}

ReactDOM.render(
    <Footer />,
    document.getElementById('app')
)
