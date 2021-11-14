import {createStore} from 'redux';
import loginReducer from '../reducers/userReducer'

const store = createStore(
    loginReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;