import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/todo";
import { composeWithDevTools } from "redux-devtools-extension";

// Create redux store. Pass in reducers that map to slices of state. Apply middleWare (if necessary).
export default createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
