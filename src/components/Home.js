import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostBody from './PostBody';

class Home extends Component {
  render() {
    let postList = this.props.posts.map((post, i) =>
      (<PostBody postId={post.id} key={i} />)
    )

    return (
      <div>
         { postList }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(Home);