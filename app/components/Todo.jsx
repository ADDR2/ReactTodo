import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {

    constructor(){
        super();

        this.state = {
            
        };
    }

    render(){

        const { id, text, completed, createdAt, completedAt } = this.props;
        const renderDate = () => {
            const message = completed ? 'Completed' : 'Created ';
            const timestamp = completed ? completedAt : createdAt;

            return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
        };

        return (
            <div onClick={
                () => {
                    this.props.onToggle(id);
                }
            }>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
}