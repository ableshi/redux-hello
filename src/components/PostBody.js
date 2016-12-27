import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';

class PostBody extends Component {
  render(){
    return(
      <div className="post-body">
        <div className="comment-num">
          { this.props.comments[this.props.courseId].length }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps)(PostBody);
