import { createStore, combineReducers } from 'redux';
import victimsReducer from '../reducers/users';

export default () => {
    const store = createStore(
        combineReducers({
            victims: victimsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}