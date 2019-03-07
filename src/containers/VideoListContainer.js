import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => { }

// const mapDispatchToProps = dispatch => {
//     return {
//         handleVideoListEntryTitleClick: id => {
//             dispatch(changeVideo(id))
//         }
//     }
// }


// var VideoListContainer = connect(
//     mapDispatchToProps
// )(VideoList)

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
