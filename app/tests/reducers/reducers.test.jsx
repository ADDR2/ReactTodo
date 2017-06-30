import expect from "expect";
import df from "deep-freeze-strict";
import moment from "moment";
import {
  searchTextReducer,
  showCompletedReducer,
  todosReducer
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
        text: "Walk the dog"
      };

      const res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it("should toggle todo", () => {
      const action = {
        type: "TOGGLE_TODO",
        id: "123"
      };

      const todos = [
        {
          id: "123",
          text: "Hey there",
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];

      const res = todosReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toExist();
    });
  });
});