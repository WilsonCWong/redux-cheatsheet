export default
`\
const initialState = {
  todos: [],
};

function todosReducer(state=initialState, action) {
  switch (action.type) {
    case 'ADD_TODOS':
      return {
        ...state,
        todos: [...state.todos, action.todos]
      }
    case 'LOAD_TODOS':
      return {
        ...state,
        todos: [...state.todos, action.todos]
      }
    default:
      return state;
  }
}

export const todos = todosReducer;
`