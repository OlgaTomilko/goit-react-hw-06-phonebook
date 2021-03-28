import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import actionsTypes from "./contacts-types";

const addContact = createAction(
  "phonebook/Save_contact",
  ({ name, number }) => ({
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  })
);

const deleteContact = createAction("phonebook/Delete_contact");
const updateFilter = createAction("phonebook/Update_filter");

export default { addContact, deleteContact, updateFilter };

// export const addContact = ({ name, number }) => ({
//   type: actionsTypes.SAVE,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// export const deleteContact = (id) => ({
//   type: actionsTypes.DELETE,
//   payload: id,
// });

// export const updateFilter = (value) => ({
//   type: actionsTypes.UPDATE_FILTER,
//   payload: value,
// });
