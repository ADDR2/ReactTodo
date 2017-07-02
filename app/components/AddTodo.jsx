import React from 'react';
import { connect } from 'react-redux';
import {
  addTodo
} from "actions";

export class AddTodo extends React.Component {

    constructor(){
        super();

    }

    handleAdd(event) {
        event.preventDefault();
        const { dispatch } = this.props;

        let todoText = this.refs.todoText.value;

        if(todoText.length > 0){
            this.refs.todoText.value = '';
            dispatch(addTodo(todoText));
        }else{
            this.refs.todoText.focus();
        }

    }

    render(){
        return(
            <div className="container__footer">
                <form ref="form" onSubmit={this.handleAdd.bind(this)}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }

}

export default connect()(AddTodo);