import { TODO_ADD, TODOS_LOAD, TODO_REPLACE, TODO_REMOVE } from "./todo";

// Consts (extract).
const MESSAGE_SHOW = "MESSAGE_SHOW";

// Action creator(s).
export const showMessage = (message) => {
	return { type: MESSAGE_SHOW, payload: message };
};

// Reducer function.
export default (state = "", action) => {
	switch (action.type) {
		case MESSAGE_SHOW:
			return action.payload;
		case TODO_ADD:
		case TODOS_LOAD:
		case TODO_REPLACE:
		case TODO_REMOVE:
			return "";
		default:
			return state;
	}
};
