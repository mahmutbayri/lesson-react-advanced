import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reeducers from './reducers';
import reduxPromise from 'redux-promise';

export default ({ children, initialState = {} }) => {

    const store = createStore(
        reeducers,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};