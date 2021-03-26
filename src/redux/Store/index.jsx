import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// createStore untuk membuat store 
// combineReducers untuk menggabungkan reducer
import authReducers from '/belajarReact/belajarreact/src/redux/Reducers/authReducers'
import counterReducers from '../Reducers/counterReducers'

let rootReducers = combineReducers ({
    auth : authReducers,
    counter : counterReducers
       
});

// let store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
|| compose;
let store = createStore(rootReducers,
    composeEnhancers(applyMiddleware(thunk)));

export default store