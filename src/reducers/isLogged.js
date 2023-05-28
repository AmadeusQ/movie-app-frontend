const isLoggedReducer = (state = !!localStorage.getItem("token"), action) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;
    case "SIGN_OUT":
      return false;
    default:
      return state;
  }
};

export default isLoggedReducer;
