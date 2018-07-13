import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './app/reducers/counterReducer';
import userReducer from './app/reducers/userReducer';
import logger from 'redux-logger';

const myCustomLogger = (store) => (next) => (action) => {
    console.log("Logged Action : ", action);
    next(action);
}

const store = createStore(combineReducers({ counter: counterReducer, user: userReducer }), {}, applyMiddleware(logger,myCustomLogger));

store.subscribe(() =>
    console.log("Store updated ", store.getState())
)

store.dispatch({ type: 'COUNT_UP', payload: 2 });
store.dispatch({ type: 'COUNT_DOWN', payload: 3 });
store.dispatch({ type: 'COUNT_DOWN', payload: 4 });
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
