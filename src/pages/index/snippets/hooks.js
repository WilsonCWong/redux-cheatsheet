export default
`\
import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { addTodos } from 'src/actions';

export const TodosComponent = () => {
  // useSelector: Selects a 'piece' of the state for use in this component.
  // Note that state.todos returns an object with the todos array inside it
  // due to the way the state was defined, hence the need to drill down another level.
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch();

  // It is recommended to memoize when passing a callback using dispatch to a child component.
  const addTodo = useCallback(
    () => dispatch(addTodos('Hardcoded task')),
    [dispatch]
  )

  // This gets the actual store.
  const store = useStore();

  return (
    <div>
      {
        todos.map((todo, index) => {
          return (
            <li key={index}>{ todo }</li>
          )
        })
      }
      <MyTodoButton onAdd={addTodo} />
    </div>
  )
}

export const MyTodoButton = React.memo(({ onAdd }) => (
  <button onClick={onAdd}>Add Task</button>
))
`