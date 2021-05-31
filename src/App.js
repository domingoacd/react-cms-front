import React from 'react';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Router from './router/router';
import rootReducer from './store/reducers';

let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );

const App = () => {
    return (
        <Provider store={store}>
            <Router> 

            </Router>
        </Provider>
    );
}

export default App;