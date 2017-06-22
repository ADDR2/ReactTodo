import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends React.Component {

    constructor(){
        super();

        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },
                {
                    id: 2,
                    text: 'clean the yard'
                },
                {
                    id: 3,
                    text: 'leave mail on porch'
                },
                {
                    id: 4,
                    text: 'play video games'
                }
            ]
        };
    }

    handleAddTodo(text){
        alert('new todo: '+text);
    }

    render(){

        let { todos } = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo add={this.handleAddTodo}/>
            </div>
        );
    }
}