import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { toggleTodo } from "actions";

export class Todo extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      id,
      text,
      completed,
      createdAt,
      completedAt,
      dispatch
    } = this.props;
    const todoClassName = completed ? "todo todo-completed" : "todo";
    const renderDate = () => {
      const message = completed ? "Completed " : "Created ";
      const timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format("MMM Do, YYYY @ h:mm a");
    };

    return (
      <div
        className={todoClassName}
        onClick={() => {
          //this.props.onToggle(id);
          dispatch(toggleTodo(id));
        }}
      >
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>
            {text}
          </p>
          <p className="todo__subtext">
            {renderDate()}
          </p>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
