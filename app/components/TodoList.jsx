import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component {

    constructor(){
        super();

        this.state = {
            
        };
    }

    render(){

        let { todos, onToggle } = this.props;

        return (
            <div>
                { todos.length > 0 && todos.map( todo => <Todo key={todo.id} {...todo} onToggle={onToggle}/> ) }
                { todos.length <= 0 && <p className="container__message">Nothing To Do</p> }
            </div>
        );
    }
}