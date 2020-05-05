import { getTodos, createTodos } from "../lib/todoServices";
const initState = {
	todos: [],
	currentTodo: "",
};

// Consts (extract).
const CURRENT_UPDATE = "CURRENT_UPDATE";
const TODO_ADD = "TODO_ADD";
const TODOS_LOAD = "TODOS_LOAD";

// Action creator(s).
export const updateCurrent = (value) => {
	return { type: CURRENT_UPDATE, payload: value };
};

export const addTodo = (todo) => {
	return { type: TODO_ADD, payload: todo };
};

export const loadTodos = (todos) => {
	return { type: TODOS_LOAD, payload: todos };
};

// Thunk(s). Thunks gives you access to dispatch().
export const fetchTodos = () => {
	return (dispatch) => {
		getTodos().then((todos) =>
			// Dispatch the action to load the todos.
			dispatch(loadTodos(todos))
		);
	};
};

export const saveTodo = (name) => {
	return (dispatch) => {
		createTodos(name).then((response) =>
			// Dispatch the action to save the todo.
			dispatch(addTodo(response))
		);
	};
};

// Reducer function.
export default (state = initState, action) => {
	switch (action.type) {
		case TODO_ADD:
			return {
				...state,
				currentTodo: "",
				todos: state.todos.concat(action.payload),
			};
		case TODOS_LOAD:
			return { ...state, todos: action.payload };
		case CURRENT_UPDATE:
			return { ...state, currentTodo: action.payload };
		default:
			return state;
	}
};
