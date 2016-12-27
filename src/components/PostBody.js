import React, { Component } from 'react';
import store from '../store';


class PostBody extends Component {
  constructor(){
    super();
    this.state = {
      num: store.getState().length
    }
  }
  render(){
    return(
      <div className="post-body">
        <div className="comment-num">
          { this.state.num }
        </div>
      </div>
    )
  }
}

export default PostBody;
