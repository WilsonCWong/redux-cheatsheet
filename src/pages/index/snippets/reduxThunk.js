export default 
`\
// Synchronous load
export const loadTodos = (todos) => {
  return {
    type: 'LOAD_TODOS',
    todos
  }
}

// Asynchronous load from API using Redux Thunk
export const loadTodosAsync = (link) => {
  return async function (dispatch) {
    let res = null, data = null;
    try {
      res = await fetch(link).then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res;
      });
      data = await res.json();
      dispatch(loadTodos(data));
    } catch(e) {
      dispatch(loadTodos([]);
      console.error(e);
      return;
    }
  }
}
`