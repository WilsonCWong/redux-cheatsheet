(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/logo.4e231cdc.svg"},21:function(e,n,t){e.exports=t(32)},26:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),s=t(15),r=t.n(s),i=(t(26),t(1)),d=t(2),c=t.n(d),l=(t(8),t(9),t(10),t(11),t(12),t(13),t(14),function(e){return a.a.createElement("pre",{className:e.className,"data-line":e.highlighted||""},a.a.createElement("code",{className:"language-".concat(e.language)},e.snippet))}),u=i.a.h3.withConfig({displayName:"Section__Heading",componentId:"sc-1ffsgzg-0"})(["color:#764ABC;font-size:1.4em;"]);var p=Object(i.a)(function(e){return Object(o.useEffect)(function(){c.a.highlightAll()},[]),a.a.createElement("div",{className:e.className},a.a.createElement(u,null,e.heading),a.a.createElement(l,{language:e.language,snippet:e.snippet}))}).withConfig({displayName:"Section",componentId:"sc-1ffsgzg-1"})(["margin:20px;flex-grow:1;"]),m=t(18),h=t.n(m),g="import React from 'react';\nimport { useSelector, useDispatch, useStore } from 'react-redux';\nimport { addTodos } from 'src/actions';\n\nexport const TodosComponent = () => {\n  // useSelector: Selects a 'piece' of the state for use in this component.\n  // Note that state.todos returns an object with the todos array inside it\n  // due to the way the state was defined, hence the need to drill down another level.\n  const todos = useSelector(state => state.todos.todos)\n  const dispatch = useDispatch();\n\n  // It is recommended to memoize when passing a callback using dispatch to a child component.\n  const addTodo = useCallback(\n    () => dispatch(addTodos('Hardcoded task')),\n    [dispatch]\n  )\n\n  // This gets the actual store.\n  const store = useStore();\n\n  return (\n    <div>\n      {\n        todos.map((todo, index) => {\n          return (\n            <li key={index}>{ todo }</li>\n          )\n        })\n      }\n      <MyTodoButton onAdd={addTodo} />\n    </div>\n  )\n}\n\nexport const MyTodoButton = React.memo(({ onAdd }) => (\n  <button onClick={onAdd}>Add Task</button>\n))\n",f="import { createStore, compose, applyMiddleware } from 'redux';\nimport thunkMiddleware from 'redux-thunk';\nimport getReducers from 'src/reducers';\n\nconst composeEnhancers =\n  (process.env.NODE_ENV !== 'production' &&\n    typeof window !== 'undefined' &&\n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||\n  compose;\n\nexport const initStore = (initialState) => {\n  let store = createStore(\n    getReducers(),\n    initialState || {},\n    composeEnhancers(applyMiddleware(thunkMiddleware))\n  );\n\n  return store;\n}\n",x="import { initStore } from './store';\n\nconst store = initStore();\n\nfunction App() {\n  return (\n    <Provider store={store}>\n      {/*...rest of app here*/}\n    </Provider>\n\n  );\n}\n",w="import { combineReducers } from 'redux';\nimport todos from './todos';\n\n// Creates what is called the 'root reducer'\nconst getReducers = () => {\n  return combineReducers({\n    todos,\n  });\n};\n\nexport default getReducers;\n",E="// Synchronous load\nexport const loadTodos = (todos) => {\n  return {\n    type: 'LOAD_TODOS',\n    todos\n  }\n}\n\n// Asynchronous load from API using Redux Thunk\nexport const loadTodosAsync = (link) => {\n  return async function (dispatch) {\n    let res = null, data = null;\n    try {\n      res = await fetch(link).then(res => {\n        if (!res.ok) throw Error(res.statusText);\n        return res;\n      });\n      data = await res.json();\n      dispatch(loadTodos(data));\n    } catch(e) {\n      dispatch(loadTodos([]);\n      console.error(e);\n      return;\n    }\n  }\n}\n",y="const initialState = {\n  todos: [],\n};\n\nfunction todosReducer(state=initialState, action) {\n  switch (action.type) {\n    case 'ADD_TODOS':\n      return {\n        ...state,\n        todos: [...state.todos, action.todos]\n      }\n    case 'LOAD_TODOS':\n      return {\n        ...state,\n        todos: [...state.todos, action.todos]\n      }\n    default:\n      return state;\n  }\n}\n\nexport const todos = todosReducer;\n",T="export const addTodos = (todos) => {\n  return {\n    type: 'ADD_TODOS', // The action type\n    todos // The payload\n  }\n}\n",S="import { connect } from 'react-redux';\nimport { addTodos } from 'src/actions/todo';\n\nexport default connect(\n  (state) => ({\n    todos: state.todos,\n  }), {\n    // Shorthand syntax, will wrap addTodos with dispatch.\n    addTodos,\n  }\n)(TodosListContainer);\n",v=i.a.h1.withConfig({displayName:"index__Title",componentId:"fvl1n2-0"})(["display:flex;justify-content:center;align-items:center;margin:75px auto;color:#764ABC;font-size:3em;"]),_=i.a.img.withConfig({displayName:"index__Logo",componentId:"fvl1n2-1"})(["width:50px;height:50px;margin-right:10px;"]),C=i.a.div.withConfig({displayName:"index__Container",componentId:"fvl1n2-2"})(["max-width:1000px;min-height:100vh;margin:0 auto;"]),k=i.a.div.withConfig({displayName:"index__CodeSection",componentId:"fvl1n2-3"})(["display:flex;justify-content:space-between;flex-wrap:wrap;"]);function O(e){return Object(o.useEffect)(function(){c.a.highlightAll()},[]),a.a.createElement(C,null,a.a.createElement(v,null,a.a.createElement(_,{src:h.a,alt:"Redux logo"}),"Redux Cheatsheet"),a.a.createElement(k,null,a.a.createElement(p,{heading:"Action Creators",language:"jsx",snippet:T}),a.a.createElement(p,{heading:"Thunk",language:"jsx",snippet:E}),a.a.createElement(p,{heading:"Reducers",language:"jsx",snippet:y}),a.a.createElement(p,{heading:"Combine Reducers",language:"jsx",snippet:w}),a.a.createElement(p,{heading:"Store",language:"jsx",snippet:f}),a.a.createElement(p,{heading:"Provider",language:"jsx",snippet:x}),a.a.createElement(p,{heading:"React-Redux Connect",language:"jsx",snippet:S}),a.a.createElement(p,{heading:"Hooks",language:"jsx",snippet:g})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(function(){return a.a.createElement(O,null)},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.cf090a8d.chunk.js.map