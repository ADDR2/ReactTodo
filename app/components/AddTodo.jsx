import React from 'react';

export default class TodoApp extends React.Component {

    constructor(){
        super();

    }

    handleAdd(event) {
        event.preventDefault();

        let todoText = this.refs.todoText.value;

        if(todoText.length > 0){
            this.refs.todoText.value = '';
            this.props.add(todoText);
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