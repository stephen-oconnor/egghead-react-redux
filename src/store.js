import { createStore } from "redux";
import reducer from "./reducers/todo";

// Create redux store. Pass in reducers that map to slices of state.
export default createStore(reducer);
