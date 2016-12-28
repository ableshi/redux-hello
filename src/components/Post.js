import React, { Component } from 'react';
import PostBody from './PostBody';
import CommentBox from './CommentBox';

export class Post extends Component {
  render() {
    return (
      <div>
        <div className="top  clearfix">
          <PostBody postId={this.props.params.postId} />
        </div>
        <div className="bottom clearfix">
          <CommentBox postId={this.props.params.postId} />
        </div>
      </div>
    );
  }
}

export default Post;
