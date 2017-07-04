import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    setSearchText,
    addTodo,
    startAddTodo,
    addTodos,
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

const createMockStore = configureMockStore([thunk]);

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
            ['todo'],
            [{
                id: 'abc123',
                text: 'Walk the dog',
                completed: false,
                createdAt: 8047397
            }],
            addTodo
        );

        expect(build.second).toEqual(build.first);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'My todo item';

        store.dispatch(startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });

    it('should generate add todos action', () => {

        const build = buildAction(
            'ADD_TODOS',
            ['todos'],
            [[
                {
                    id: '111',
                    text: 'anything',
                    completed: false,
                    completedAt: undefined,
                    createdAt: 33000
                }
            ]],
            addTodos
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