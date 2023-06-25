import {combineReducers} from 'redux'
import {userReducer,selectedUserReducer} from './userreducer'

const reducers=combineReducers({
    allproducts:userReducer,
    user:selectedUserReducer
})

export default reducers;