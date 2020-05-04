const initState = {
	todos: [
		{ id: 1, name: "Create a store", isComplete: true },
		{ id: 2, name: "Load state from store", isComplete: true },
		{ id: 3, name: "Handle state changes with Redux", isComplete: false },
	],
	currentTodo: "",
};

// Consts (extract).
const CURRENT_UPDATE = "CURRENT_UPDATE";
const TODO_ADD = "TODO_ADD";

// Action creator.
export const updateCurrent = (value) => {
	return { type: CURRENT_UPDATE, payload: value };
};

// Reducer function.
export default (state = initState, action) => {
	switch (action.type) {
		case TODO_ADD:
			return { ...state, todos: state.todos.concat(action.payload) };
		case CURRENT_UPDATE:
			return { ...state, currentTodo: action.payload };
		default:
			return state;
	}
};
