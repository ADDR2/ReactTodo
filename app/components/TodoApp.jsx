import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component {

    constructor(){
        super();

        this.state = {
            showCompleted: false,
            searchText: '',
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
                <TodoList todos={todos}/>
                <AddTodo add={this.handleAddTodo}/>
            </div>
        );
    }
}