import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contacts-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

//const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});
export default store;

//===before===
// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "phonebook/Save_contact":
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, payload],
//         },
//       };

//     case "phonebook/Update_filter": {
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           filter: payload,
//         },
//       };
//     }
//     case "phonebook/Delete_contact":
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...payload],
//         },
//       };
//     default:
//       return state;
//   }
// };
