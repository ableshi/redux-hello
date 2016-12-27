import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';


class PostBody extends Component {
  render(){
    return(
      <div className="post-body">
        <div className="comment-num">
          { this.props.comments.length }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  // 这里的 state 就是 store.getState() 的返回值，也就是整个状态树
   comments: state
});

export default connect(mapStateToProps)(PostBody);
// React 自身特点，props 变化，自动再次呼叫 render()
