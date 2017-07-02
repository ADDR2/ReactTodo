import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import { AddTodo } from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        let spy = expect.createSpy();
        const action = {
            type: 'ADD_TODO',
            text: 'hey'
        };

        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.todoText.value = 'hey';
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        let spy = expect.createSpy();

        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
});