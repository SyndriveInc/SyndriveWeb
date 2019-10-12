import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import victimsReducer from '../reducers/victims';
import userinfoReducer from '../reducers/userinfo';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            victims: victimsReducer,
            userinfo: userinfoReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}