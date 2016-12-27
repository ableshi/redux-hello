import React, { Component } from 'react';

import store from '../store';

class CommentBox extends Component {
  constructor(){
    super();
    this.state = {
      comments: store.getState().comments
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(store.getState());
    store.dispatch({type: 'ADD_COMMENT', comment: this.refs.comment.value});
    this.refs.commentForm.reset();
    this.setState({comments: store.getState().comments});
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
        <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)} className="comment-form">
          <input type="text" ref="comment" className="input"/>
          <input type="submit" className="submit-btn"/>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}

export default CommentBox;
