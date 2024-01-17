const initialState = {
  name: "",
  phone: "",
  email: "",
  address: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "SUBMIT_FORM":
      return initialState;
    default:
      return state;
  }
};

export default formReducer;
