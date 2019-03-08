import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleData from '../data/exampleVideoData.js'

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var initialState = {
    currentVideo: exampleData[0],
    videoList: exampleData
}

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
const store = configureStore(initialState)
// export default configureStore
export default store