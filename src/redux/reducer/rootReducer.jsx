import {combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { homeVideoReducer } from './videosReducer'

export const rootReducer=combineReducers({
    authReducer,
    homeVideoReducer
})