import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import {
  setSearchText,
  addTodo,
  startAddTodo,
  addTodos,
  toggleShowCompleted,
  updateTodo,
  startToggleTodo
} from "actions";
import { Todo } from "Todo";

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  it("should dispatch TOGGLE_TODO action on click", () => {
    let todoData = {
      id: 199,
      text: "Write Todo.test.jsx test",
      completed: true
    };
    const action = startToggleTodo(todoData.id, !todoData.completed);

    let spy = expect.createSpy();

    let todo = TestUtils.renderIntoDocument(
      <Todo {...todoData} dispatch={spy} />
    );
    let $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
