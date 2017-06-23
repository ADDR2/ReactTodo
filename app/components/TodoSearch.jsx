import React from 'react';

export default class TodoSearch extends React.Component {

    handleSearch(){
        let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;


        this.props.onSearch(showCompleted, searchText);
    }

    render(){
        return (
            <div>
                <div>
                    <input type="seach" ref="searchText" placeholder="Search todos" onChange={this.handleSearch.bind(this)}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}