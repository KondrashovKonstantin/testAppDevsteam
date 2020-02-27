import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import photosReducer from './photosReducer'

let reducers = combineReducers({photosReducer})
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;