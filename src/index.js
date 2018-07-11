import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case 'DECREMENT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
}

const userReducer = (state = [{
    firstName: "Sunil",
    lastName: "Saini",
    email: "vishnu.saini@email.com",
    hobbies: ["Table tennis", "Music"]
}], action) => {
    switch (action.type) {
        case 'ADD_USER':
            state.push(action.payload);
            break;
    }
    return state;
}

const myCustomLogger = (store) => (next) => (action) => {
    console.log("Logged Action : ", action);
    next(action);
}

const store = createStore(combineReducers({ math: mathReducer, user: userReducer }), {}, applyMiddleware(myCustomLogger));

store.subscribe(() =>
    console.log("Store updated ", store.getState())
)

store.dispatch({ type: 'INCREMENT', payload: 19 });
store.dispatch({ type: 'INCREMENT', payload: 71 });
store.dispatch({ type: 'DECREMENT', payload: 30 });
store.dispatch({
    type: 'ADD_USER', payload: {
        firstName: "Mary",
        lastName: "Moe",
        email: "mary@example.com",
        hobbies: ["Table tennis", "Music"]
    }
});

store.dispatch({
    type: 'ADD_USER', payload: {
        firstName: "July",
        lastName: "Dooley",
        email: "july@example.com",
        hobbies: ["Table tennis", "Music"]
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


registerServiceWorker();
