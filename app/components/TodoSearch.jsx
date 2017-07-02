import React from 'react';
import { connect } from "react-redux";
import { setSearchText, toggleShowCompleted } from "actions";

export class TodoSearch extends React.Component {

    render(){
        const { dispatch, showCompleted, searchText } = this.props;

        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
                        dispatch(setSearchText(this.refs.searchText.value));
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(toggleShowCompleted());
                        }}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

const mS = state => ({
  showCompleted: state.showCompleted,
  searchText: state.searchText
});

export default connect(mS)(TodoSearch);