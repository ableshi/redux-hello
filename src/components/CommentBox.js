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
    this.refs.commentForm.reset();
  }
  render(){
    let commentList = this.state.comments.map((item, i) => {
      return (<div key={i} className="comment">
        { item }
      </div>)
    })
    return(
      <div className="comment-box">
        { commentList }
        <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)} className="comment-form">
          <input type="text" className="input" ref="content" />
          <button type="submit" className="submit-btn" >提交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}

export default CommentBox;
