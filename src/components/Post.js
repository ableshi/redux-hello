import React, { Component } from 'react';
import PostBody from './PostBody';
import CommentBox from './CommentBox';
import { Provider } from 'react-redux';
import store from '../store';

class Post extends Component {
  render(){
    return(
      <Provider store={store}>
        <div>
          <div className="top  clearfix">
            <PostBody />
          </div>
          <div className="bottom clearfix">
            <CommentBox />
          </div>
        </div>
      </Provider>
    )
  }
}

export default Post;
