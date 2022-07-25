import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = composeWithDevTools({});
const intialState = {
  name: "youtube",
};
const reducerFn = (intialState) => intialState;
const store = createStore(reducerFn, intialState, composeEnhancer());

export default store;
