import expect from 'expect';
import {
    setSearchText,
    addTodo,
    toggleShowCompleted,
    toggleTodo
} from 'actions';

function buildAction(type, nameAttrs, valueAttrs, action){
    const compareTo = {
        type
    };

    for(let i = 0; i < nameAttrs.length; i++)
        compareTo[nameAttrs[i]] = valueAttrs[i];
    
    return {
        first: compareTo,
        second: action(...valueAttrs)
    };
}

describe('Actions', () => {
    it('should generate search text action', () => {

        const build = buildAction(
            'SET_SEARCH_TEXT',
            ['searchText'],
            ['Some search text'],
            setSearchText
        );

        expect(build.second).toEqual(build.first);
    });

    it('should generate add todo action', () => {

        const build = buildAction(
            'ADD_TODO',
            ['text'],
            ['Thing to do'],
            addTodo
        );

        expect(build.second).toEqual(build.first);
    });

    it('should generate toggle show completed action', () => {

        const build = buildAction(
            'TOGGLE_SHOW_COMPLETED',
            [],
            [],
            toggleShowCompleted
        );

        expect(build.second).toEqual(build.first);
    });

    it('should generate toggle todo action', () => {

        const build = buildAction(
            'TOGGLE_TODO',
            ['id'],
            [3],
            toggleTodo
        );

        expect(build.second).toEqual(build.first);
    });
});