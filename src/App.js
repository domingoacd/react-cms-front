import React from 'react';
import Router from './router/router';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore } from 'redux';

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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