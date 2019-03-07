import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  let newState = [];
  for (var i = 0; i < state.length; i++) {
    newState[i] = state[i];
  }

  if (action.type === 'CHANGE_VIDEO_LIST') {
    for (var i = 0; i < action.videos.length; i++) {
      newState[i] = action.videos[i];
    }

    return newState
  }

  return state;
};

export default videoListReducer;

// state = {
//   videoList: [1, 2, 3];
//   currentVideo: video
// }



// action = {
//   type: 'CHANGE_VIDEO_LIST',
//   videos: [{ script: 'but it\'s my only line!' }]
// }
