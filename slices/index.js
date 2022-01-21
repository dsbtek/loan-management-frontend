import { combineReducers } from 'redux';

import loansReducer from './loans';
// import usersReducer from './usersReducer';
import authReducer from './auth';
import alertReducer from './alert';
import languageReducer from './language';

const rootReducer = combineReducers({
    // users: usersReducer,
    loans: loansReducer,
    alert: alertReducer,
    user: authReducer,
    languages: languageReducer,
});

export default rootReducer;