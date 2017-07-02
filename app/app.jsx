let React = require("react");
let ReactDOM = require("react-dom");
import { Route, Router, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";
import TodoApp from "TodoApp";
import {
  setSearchText,
  addTodo,
  toggleShowCompleted,
  toggleTodo
} from "actions";
const store = require("configureStore").configure();

store.subscribe(() => {
  console.log("New state", store.getState());
});

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
