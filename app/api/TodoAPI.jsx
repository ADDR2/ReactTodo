import $ from "jQuery";

module.exports = {
  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos.filter(todo => {
      return (
        (!todo.completed || showCompleted) &&
        todo.text.trim().toLowerCase().includes(searchText.trim().toLowerCase())
      );
    });

    return filteredTodos.sort((itemA, itemB) => {
      return !itemA.completed ? -1 : 1;
    });
  }
};
