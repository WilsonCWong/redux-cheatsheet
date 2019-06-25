export default
`\
import { combineReducers } from 'redux';
import todos from './todos';

// Creates what is called the 'root reducer'
const getReducers = () => {
  return combineReducers({
    todos,
  });
};

export default getReducers;
`