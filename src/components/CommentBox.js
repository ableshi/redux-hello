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
  render(){
    let commentList = this.state.comments.map((item, i) => {
      return (<div key={i} className="comment">
        { item }
      </div>)
    })
    return(
      <div className="comment-box">
        { commentList }
      </div>
    )
  }
}

export default CommentBox;
