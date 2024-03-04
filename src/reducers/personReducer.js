import { ADD_PERSON, EDIT_PERSON } from "../actions";

const initialState = {
  persons: [
    { name: "John", age: 30, profession: "Engineer" },
    { name: "Alice", age: 25, profession: "Teacher" },
  ],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload],
      };
    case EDIT_PERSON:
      const { index, updatedPerson } = action.payload;
      const updatedPersons = [...state.persons];
      updatedPersons[index] = updatedPerson;
      return {
        ...state,
        persons: updatedPersons,
      };
    default:
      return state;
  }
};

export default personReducer;
