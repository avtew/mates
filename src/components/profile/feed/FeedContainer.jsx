import { connect } from 'react-redux';
import { addPostActionCreator, inputUpdatePostActionCreator } from '../../../redux/profileReduser';
import Feed from './Feed';

let mapStateToProps = (state) => {
  return {
    feed: state.profile.feed,
    newPostText: state.profile.newPostText,
    photo: state.profile.photos.small
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    inputUpdate: (text) => {
      dispatch(inputUpdatePostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const FeedContainer = connect (mapStateToProps, mapDispatchToProps) (Feed);

export default FeedContainer;