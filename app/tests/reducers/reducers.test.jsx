import expect from 'expect';
import df from 'deep-freeze-strict';
import {
    searchTextReducer,
    showCompletedReducer
} from 'reducers';


describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            const res = searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            const action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            const state = false;
            const res = showCompletedReducer(df(state), df(action));

            expect(res).toEqual(!state);
        });
    });
});