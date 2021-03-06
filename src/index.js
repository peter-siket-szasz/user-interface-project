import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import SelectEmotions from './views/SelectEmotions';
import SubmitEmotions from './views/SubmitEmotions';

const routing = (
    <Provider store={store}>
        <Router>
            <Route path='/' component={App} />
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
