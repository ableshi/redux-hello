import React, { Component } from 'react';
import PostBody from './PostBody';
import CommentBox from './CommentBox';

export class ShowCourse extends Component {
  render() {
    return (
      <div>
        <div className="top  clearfix">
          <PostBody />
        </div>
        <div className="bottom clearfix">
          <CommentBox />
        </div>
      </div>
    );
  }
}

export default ShowCourse;
