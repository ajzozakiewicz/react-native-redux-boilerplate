import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import { fetchInitialState } from '../store/actions/actions';

import App from './App';

const store = configureStore();

store.dispatch(fetchInitialState());
store.subscribe(() => {
    console.log('State Change: ', store.getState());
});

class Root extends Component {
    render () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Root;
