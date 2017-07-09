import expect from "expect";
import df from "deep-freeze-strict";
import moment from "moment";
import {
  searchTextReducer,
  showCompletedReducer,
  todosReducer,
  authReducer
} from "reducers";

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set searchText", () => {
      const action = {
        type: "SET_SEARCH_TEXT",
        searchText: "dog"
      };

      const res = searchTextReducer(df(""), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe("showCompletedReducer", () => {
    it("should toggle showCompleted", () => {
      const action = {
        type: "TOGGLE_SHOW_COMPLETED"
      };

      const state = false;
      const res = showCompletedReducer(df(state), df(action));

      expect(res).toEqual(!state);
    });
  });

  describe("todosReducer", () => {
    it("should add new todo", () => {
      const action = {
        type: "ADD_TODO",
        todo: {
          id: "abc123",
          text: "Walk the dog",
          completed: false,
          createdAt: 8047397
        }
      };

      const res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it("should add initial todos", () => {
      const action = {
        type: "ADD_TODOS",
        todos: [
          {
            id: "111",
            text: "anything",
            completed: false,
            completedAt: undefined,
            createdAt: 33000
          }
        ]
      };

      const res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res).toEqual(action.todos);
    });

    it("should update todo", () => {
      const todos = [
        {
          id: "123",
          text: "Hey there",
          completed: true,
          createdAt: 123,
          completedAt: 125
        }
      ];

      const updates = {
        completed: false,
        completedAt: null
      };

      const action = {
        type: "UPDATE_TODO",
        id: todos[0].id,
        updates
      };

      const res = todosReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });

  describe("authReducer", () => {

    it("should store uid on LOGIN", () => {
      const action = {
        type: "LOGIN",
        uid: '123'
      };

      const res = authReducer(undefined, df(action));

      expect(res).toEqual({
        uid: action.uid
      });
    });

    it("should wipe auth on LOGOUT", () => {
      const action = {
        type: "LOGOUT"
      };

      const authData = {
        uid: '123'
      };

      const res = authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });
});
