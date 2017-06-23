import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

export default class TodoApp extends React.Component {

    constructor(){
        super();

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'clean the yard',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'leave mail on porch',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'play video games',
                    completed: false
                }
            ]
        };
    }

    handleAddTodo(text){
        this.setState({
           todos: [
               ...this.state.todos,
               {
                    id: uuid(),
                    text,
                    completed: false
               }
           ] 
        });
    }

    handleToggle(id){
        let newTodos = this.state.todos.map((todo) => {
            if(todo.id === id)
                todo.completed = !todo.completed;
            return todo
        });

        this.setState({
            todos: newTodos
        });
    }

    handleSearch(showCompleted, searchText){
        this.setState({
           showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    render(){

        let { todos } = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch.bind(this)}/>
                <TodoList todos={todos} onToggle={this.handleToggle.bind(this)}/>
                <AddTodo add={this.handleAddTodo.bind(this)}/>
            </div>
        );
    }
}