import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component {

    constructor(){
        super();

        this.state = {
            
        };
    }

    render(){

        let { todos } = this.props;

        return (
            <div>
                { todos.map( todo => <Todo key={todo.id} {...todo} /> ) }
            </div>
        );
    }
}