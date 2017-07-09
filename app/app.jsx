let React = require("react");
let ReactDOM = require("react-dom");
import { hashHistory } from "react-router";
import { Provider } from "react-redux";
import firebase from "index";

import {
  startAddTodos,
  login,
  logout
} from "actions";
import router from 'router';

const store = require("configureStore").configure();

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(logout());
    hashHistory.push('/');
  }
});

//load foundation
//require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById("app")
);
