import uuid from "node-uuid";
import moment from "moment";

export const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText;
    default:
      return state;
  }
};

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          const completed = !todo.completed;
          const completedAt = completed ? moment().unix() : undefined;

          return {
            ...todo,
            completed,
            completedAt
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
