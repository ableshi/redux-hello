import { combineReducers } from 'redux';

import courseReducer from './courses';
import commentReducer from './comments';

const rootReducer = combineReducers({
  courses: courseReducer,
  comments: commentReducer
});

export default rootReducer;
