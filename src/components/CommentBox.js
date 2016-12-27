import React, { Component } from 'react';


class CommentBox extends Component {
  constructor(){
    super();
    this.state = {
      comments: [
        "hello1",
        "hello2"
      ]
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.content.value);
    let content = this.refs.content.value;
    let comments =   this.state.comments;
    comments.push(content);
    this.setState({ comments });
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
