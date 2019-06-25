export default 
`\
import { initStore } from './store';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      {/*...rest of app here*/}
    </Provider>

  );
}
`