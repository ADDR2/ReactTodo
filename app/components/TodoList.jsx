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

    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        {filteredTodos.length > 0 &&
          filteredTodos.map(todo => <Todo key={todo.id} {...todo} />)}
        {filteredTodos.length <= 0 &&
          <p className="container__message">Nothing To Do</p>}
      </div>
    );
  }
}

const mS = state => state;

export default connect(mS)(TodoList);
