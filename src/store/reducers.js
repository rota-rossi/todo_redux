

const todoList = [
  "Walk the dog",
  "Buy milk",
  "Discuss Bike shedding"
]

function todoReducer(state = todoList, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.item]
    case 'REMOVE_TODO':
      return state.filter(item => item !== action.item)
    default:
      return state
  }
}

export default todoReducer