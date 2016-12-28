import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';

class PostBody extends Component {
  handleClick(postId) {
    store.dispatch({type: 'INCREMENT_LIKES', index: postId - 1})
  }

  render(){
    return(
      <div className="post-body">
        <div className="num comments">
          { this.props.comments[this.props.postId].length }
        </div>
        <div className="num likes" onClick={this.handleClick.bind(this, this.props.postId)}>
          {this.props.posts[this.props.postId - 1].likes}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
});

export default connect(mapStateToProps)(PostBody);
