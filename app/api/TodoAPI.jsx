import $ from 'jQuery';

module.exports = {
    setTodos: (todos) => {
        if($.isArray(todos)){
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: () => {
        let stringTodos = localStorage.getItem("todos");
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (error) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: (todos, showCompleted, searchText) => {

        let filteredTodos = todos.filter((todo) => {
            return (!todo.completed || showCompleted) && todo.text.trim().toLowerCase().includes(searchText.trim().toLowerCase());
        });

        return filteredTodos.sort((itemA, itemB) => {
            return !itemA.completed? -1 : 1;
        });


    }
};