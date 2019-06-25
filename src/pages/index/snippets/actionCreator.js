export default 
`\
export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS', // The action type
    todos // The payload
  }
}
`