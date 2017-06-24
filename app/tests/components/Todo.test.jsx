import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import Todo from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () =>{
        let todoData = {
            id: 199,
            text: 'Write Todo.test.jsx test',
            completed: true
        };

        let spy = expect.createSpy();

        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        let $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(199);
    });

});