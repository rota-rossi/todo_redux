
function todoReducer(state = [], action) {
  switch (action.type) {
    case 'SET_TODOS':
      return action.value
    case 'ADD_TODO':
      return [...state, action.item]
    case 'REMOVE_TODO':
      return state.filter(item => item !== action.item)
    default:
      return state
  }
}

export default todoReducer