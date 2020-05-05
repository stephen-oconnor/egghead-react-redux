import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todo";
import messageReducer from "./reducers/messages";

// Combine reducers to slice state up.
const rootReducer = combineReducers({
	todo: todoReducer,
	message: messageReducer,
});

// Create redux store. Pass in reducers that map to slices of state. Apply middleWare (if necessary).
export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
