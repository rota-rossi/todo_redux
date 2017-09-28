

const addTodo = (item) => ({ type: 'ADD_TODO', item })
const removeTodo = (item) => ({ type: 'REMOVE_TODO', item })

export { addTodo, removeTodo }