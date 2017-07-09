import React from "react";
import { connect } from 'react-redux';
import {
  startLogout
} from "actions";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";

export class TodoApp extends React.Component {
  
  onLogout(event) {
    event.preventDefault();

    const { dispatch } = this.props;

    dispatch(startLogout());    
  }

  render() {
    return (
      <div>

        <div className="page-actions">
          <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(TodoApp);