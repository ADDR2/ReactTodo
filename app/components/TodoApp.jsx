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
                    text: 'walk the dog'
                },
                {
                    id: uuid(),
                    text: 'clean the yard'
                },
                {
                    id: uuid(),
                    text: 'leave mail on porch'
                },
                {
                    id: uuid(),
                    text: 'play video games'
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
                   text
               }
           ] 
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
                <TodoList todos={todos}/>
                <AddTodo add={this.handleAddTodo.bind(this)}/>
            </div>
        );
    }
}