import React from "react";
import Todo from "Todo";
import { connect } from "react-redux";

export class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let { todos } = this.props;

    return (
      <div>
        {todos.length > 0 &&
          todos.map(todo => <Todo key={todo.id} {...todo} />)}
        {todos.length <= 0 &&
          <p className="container__message">Nothing To Do</p>}
      </div>
    );
  }
}

const mS = state => ({
  todos: state.todos
});

export default connect(mS)(TodoList);
