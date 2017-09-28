
const getTodos = () => ({ type: 'GET_TODOS' })
const setTodos = (todos) => ({ type: 'SET_TODOS', value: todos })
const addTodo = (item) => ({ type: 'ADD_TODO', item })
const removeTodo = (item) => ({ type: 'REMOVE_TODO', item })

export { getTodos, setTodos, addTodo, removeTodo }