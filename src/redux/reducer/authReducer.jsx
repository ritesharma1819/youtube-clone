const accessToken_storage = typeof window === "undefined";
const user_storage = typeof window === "undefined";
if (!accessToken_storage) {
  localStorage.getItem("accesstoken");
}
if (!user_storage) {
  JSON.parse(localStorage.getItem("user"));
}
const intialState = {
  accessToken: accessToken_storage ? accessToken_storage : null,
  user: user_storage ? user_storage : null,
  loading: false,
};

export const authReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        accessToken: payload,
      };
    case "LOAD_PROFILE":
      return {
        ...state,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        accessToken: null,
        user: null,
      };
    default:
      return state;
  }
};
