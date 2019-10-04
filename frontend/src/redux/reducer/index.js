import {
    combineReducers
} from 'redux'
import musicReducer from './music.js'

const storeReducer = combineReducers({
    musicReducer
})

export default storeReducer