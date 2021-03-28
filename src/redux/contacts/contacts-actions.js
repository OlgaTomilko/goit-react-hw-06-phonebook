import { v4 as uuidv4 } from "uuid";
import actionsTypes from "./contacts-types";

export const addContact = ({ name, number }) => ({
  type: actionsTypes.SAVE,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});
export const deleteContact = (id) => ({
  type: actionsTypes.DELETE,
  payload: id,
});

export const updateFilter = (value) => ({
  type: actionsTypes.UPDATE_FILTER,
  payload: value,
});
