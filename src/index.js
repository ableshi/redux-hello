import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import './main.css';
import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/posts/:postId" component={Post} />
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'));
