let React = require("react");
let ReactDOM = require("react-dom");
import { Route, Router, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";
import TodoApp from "TodoApp";
import {
  setSearchText,
  addTodo,
  addTodos,
  toggleShowCompleted,
  toggleTodo
} from "actions";
import TodoAPI from "TodoAPI";
const store = require("configureStore").configure();

store.subscribe(() => {
  const state = store.getState();
  console.log("New state", state);
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

//load foundation
//require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
);
