function courseComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state, action.comment];
    default:
      return state;
  }
}

function commentReducer(state = [], action) {
  if(typeof action.courseId !== 'undefined') {
    return {
      ...state,
      [action.courseId]: courseComments(state[action.courseId], action)
    }
  }
  return state;
}

export default commentReducer;
