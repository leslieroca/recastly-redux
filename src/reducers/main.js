import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';


var rootReducer = combineReducers({ currentVideo: currentVideo, videoList: videoList });

// var rootReducer = (state = { videoList: [], currentVideo: null }, action) => {
//     combineReducers({
//         currentVideo,
//         videoList
//     })

//     var newState = {}

//     if (action.type === 'CHANGE_VIDEO_LIST') {
//         for (var i = 0; i < action.videos.length; i++) {
//             newState.videoList = action.videos
//         }
//         return newState
//     }

//     if (action.type === 'CHANGE_VIDEO') {
//         // for (var key in action.currentVideo) {
//         //     newState.[key] = action.video[key]
//         // }
//         newState = action
//         return newState;
//     }



//     return state;
// };

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
