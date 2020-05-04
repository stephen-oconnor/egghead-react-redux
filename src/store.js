import { createStore } from "redux";
import reducer from "./reducers/todo";

// Create redux store.
export default createStore(reducer);
