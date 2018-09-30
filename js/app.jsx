import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Header } from './header.jsx';
import { Footer } from './footer.jsx';
import { Welcome } from './container/welcome.jsx';
import { Tourists } from './container/tourists.jsx';
import { Flights } from './container/flights.jsx';
import { NewTourists } from './container/newTourists.jsx';
import Redirect from 'react-router/Redirect';

const history = createBrowserHistory();
console.log('history',history);


document.addEventListener('DOMContentLoaded', function () {
    class App extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <Router history={history}>
                    <div className="app">
                        <Header/>
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={Welcome} />
                                <Route  path='/tourists' component={Tourists} />
                                <Route  path='/flights' component={Flights} />
                                <Route  path='/newTourists' component={NewTourists} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router >
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});