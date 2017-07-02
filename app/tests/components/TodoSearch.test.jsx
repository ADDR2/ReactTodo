import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        let spy = expect.createSpy();
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'hey'
        };

        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(todoSearch));
        todoSearch.refs.searchText.value = 'hey';
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        let spy = expect.createSpy();
        const action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(todoSearch));
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(action);
    });

});