let React = require("react");
let ReactDOM = require("react-dom");
import { Route, Router, IndexRoute, hashHistory } from "react-router";
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

store.dispatch(addTodo("Walk the dog"));
store.dispatch(setSearchText("Walk"));
store.dispatch(toggleShowCompleted());

//load foundation
//require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(<TodoApp />, document.getElementById("app"));
