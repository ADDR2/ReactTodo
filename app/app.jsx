let React = require('react');
let ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'TodoApp';

//load foundation
//require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
