export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const ADD_PERSON = "ADD_PERSON";
export const EDIT_PERSON = "EDIT_PERSON";

export const setLoggedIn = (isLoggedIn) => {
  return {
    type: SET_LOGGED_IN,
    payload: isLoggedIn,
  };
};

export const addPerson = (person) => {
  return {
    type: ADD_PERSON,
    payload: person,
  };
};

export const editPerson = (index, updatedPerson) => {
  return {
    type: EDIT_PERSON,
    payload: { index, updatedPerson },
  };
};
