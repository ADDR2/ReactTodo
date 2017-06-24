import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import TodoAPI from 'TodoAPI';

export default class TodoApp extends React.Component {

    constructor(){
        super();

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    }

    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos);
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