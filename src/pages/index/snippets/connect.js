export default
`\
import { connect } from 'react-redux';
import { addTodos } from 'src/actions/todo';

export default connect(
  (state) => ({
    todos: state.todos,
  }), {
    // Shorthand syntax, will wrap addTodos with dispatch.
    addTodos,
  }
)(TodosListContainer);
`