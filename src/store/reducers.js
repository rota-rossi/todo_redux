

const todoList = [
  "Walk the dog",
  "Buy milk",
  "Discuss Bike shedding"
]

function todoReducer(state = [], action) {
  switch (action.type) {
    case 'SET_TODOS':
      return action.value
    case 'ADD_TODO':
      return [...state, action.item]
    case 'REMOVE_TODO':
      return state.filter(item => item !== action.item)
    case 'PERSISTED':
      console.log('DATA PERSISTED!')
      return state
    case 'REMOVED':
      console.log('REMOVED!')
      return state
    default:
      return state
  }
}

export default todoReducer