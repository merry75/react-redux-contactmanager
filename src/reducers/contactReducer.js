import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT
} from "../actions/types";

const initialState = {
  contacts: [
    // {
    //   id: 1,
    //   name: "John Doe",
    //   email: "john@gmail.com",
    //   phone: "555-555-5555"
    // },
    // {
    //   id: 2,
    //   name: "Karen Williams",
    //   email: "karen@gmail.com",
    //   phone: "444-444-4444"
    // },
    // {
    //   id: 3,
    //   name: "Henry Johnson",
    //   email: "henry@gmail.com",
    //   phone: "333-333-333"
    // }
  ],
  contact: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };

    default:
      return state;
  }
};
