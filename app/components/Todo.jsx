import React from 'react';

export default class Todo extends React.Component {

    constructor(){
        super();

        this.state = {
            
        };
    }

    render(){

        let { id, text } = this.props;

        return (
            <div>
                {`${id}: ${text}`}
            </div>
        );
    }
}