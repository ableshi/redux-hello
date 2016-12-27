import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import './main.css';
import App from './components/App';
import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Courses}></IndexRoute>
      <Route path="/view/:courseId" component={ShowCourse}></Route>
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'));
