const getTodos = () => ({ type: 'GET_TODOS' })
const setTodos = (value) => ({ type: 'SET_TODOS', value })
const addTodo = (item) => ({ type: 'ADD_TODO', item })
const removeTodo = (item) => ({ type: 'REMOVE_TODO', item })

export { getTodos, setTodos, addTodo, removeTodo }