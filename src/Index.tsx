import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Redux/reducer';
import AppNavigator from './Navigation/AppNavigator';

const store = createStore(reducer);

const Index = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
};

export default Index;
