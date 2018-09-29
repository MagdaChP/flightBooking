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
import { Welcome } from './welcome.jsx';
import { Tourists } from './tourists.jsx';
import { Flights } from './flights.jsx';
import Redirect from 'react-router/Redirect';

const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', function () {
    class App extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <Router history={history}>
                    <div className="app">
                        <Header history={history} />
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={Welcome} />
                                <Route exact path='/tourists' component={Tourists} />
                                <Route exact path='/flights' component={Flights} />
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