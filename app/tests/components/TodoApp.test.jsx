import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todo states on handleAddTodo', () => {
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: []
        });
        todoApp.handleAddTodo('Test text');

        expect(todoApp.state.todos[0].text).toBe('Test text');
    });
});