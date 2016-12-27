import React, { Component } from 'react';

import store from '../store';

class CommentBox extends Component {
  constructor(){
    super();
    this.state = {
      comments: store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(store.getState());
    store.dispatch({type: 'ADD_COMMENT', comment: this.refs.comment.value});
    console.log(store.getState());
    this.refs.commentForm.reset();
    this.setState({comments: store.getState()});
  }
  render(){
    let commentList = this.state.comments.map((comment, i)=>{
      return (
        <div className="comment" key={i}>
          { comment }
        </div>
      )
    })
    return(
      <div className="comment-box">
        { commentList }
        <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="comment" className="input"/>
          <input type="submit" className="submit-btn"/>
          <div className="underline"></div>
        </form>
      </div>
    )
  }
}

export default CommentBox;
