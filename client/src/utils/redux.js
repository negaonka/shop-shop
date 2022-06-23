import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import {useProductReducer} from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const AppWrapper = ({children}) => {

    const store = createStore(useProductReducer,  {  
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''},
        applyMiddleware(thunk));
    return (<Provider store={store}>{children}</Provider>);
}

export {AppWrapper}