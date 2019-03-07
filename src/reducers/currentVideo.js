import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  let newState = {}
  if (!state) {
    newState = {};
  } else {
    for (var key in state) {
      newState[key] = state[key]
    }
  }

  if (action.type === 'CHANGE_VIDEO') {
    for (var key in action.video) {
      newState[key] = action.video[key]
    }
    return newState;
  }
  return state;
};

export default currentVideoReducer;
