import { combineReducers } from 'redux';
import userReducer from './userReducer'
import emotionsReducer from './emotionsReducer'

const rootReducer = combineReducers({
    userReducer,
    emotionsReducer
})

export default rootReducer