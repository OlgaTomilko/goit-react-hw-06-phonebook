import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import actions from "./contacts-actions";

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [actions.updateFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
