import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        let spy = expect.createSpy();

        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(todoSearch));
        todoSearch.refs.searchText.value = 'hey';
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        
        expect(spy).toHaveBeenCalledWith(false, 'hey');
    });

    it('should call onSearch with propper checked value', () => {
        let spy = expect.createSpy();

        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(todoSearch));
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(true, '');
    });

});