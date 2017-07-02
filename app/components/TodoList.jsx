import React from "react";
import Todo from "Todo";
import { connect } from "react-redux";
import TodoAPI from "TodoAPI";

export class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let { todos, showCompleted, searchText } = this.props;

    return (
      <div>
        {todos.length > 0 &&
          TodoAPI.filterTodos(todos, showCompleted, searchText).map(todo => <Todo key={todo.id} {...todo} />)}
        {todos.length <= 0 &&
          <p className="container__message">Nothing To Do</p>}
      </div>
    );
  }
}

const mS = state => state;

export default connect(mS)(TodoList);
