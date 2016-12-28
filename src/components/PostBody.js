import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';

class PostBody extends Component {
  handleClick(courseId) {
    store.dispatch({type: 'INCREMENT_LIKES', index: courseId - 1})
  }

  render(){
    return(
      <div className="post-body">
        <div className="num comments">
          { this.props.comments[this.props.courseId].length }
        </div>
        <div className="num likes" onClick={this.handleClick.bind(this, this.props.courseId)}>
          {this.props.courses[this.props.courseId - 1].likes}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  courses: state.courses
});

export default connect(mapStateToProps)(PostBody);
