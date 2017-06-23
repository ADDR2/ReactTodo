import React from 'react';

export default class Todo extends React.Component {

    constructor(){
        super();

        this.state = {
            
        };
    }

    render(){

        let { id, text, completed } = this.props;

        return (
            <div onClick={
                () => {
                    this.props.onToggle(id);
                }
            }>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }
}