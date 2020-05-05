import {
	getTodos,
	createTodos,
	updateTodo,
	destroyTodo,
} from "../lib/todoServices";
import { showMessage } from "./messages";

const initState = {
	todos: [],
	currentTodo: "",
};

// Consts (extract).
const CURRENT_UPDATE = "CURRENT_UPDATE";
export const TODO_REMOVE = "TODO_REMOVE";
export const TODO_REPLACE = "TODO_REPLACE";
export const TODO_ADD = "TODO_ADD";
export const TODOS_LOAD = "TODOS_LOAD";

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

export const replaceTodo = (todo) => {
	return { type: TODO_REPLACE, payload: todo };
};

export const removeTodo = (id) => {
	return { type: TODO_REMOVE, payload: id };
};

// Thunk(s). Thunks gives you access to dispatch().
export const fetchTodos = () => {
	return (dispatch) => {
		dispatch(showMessage("Loading todos..."));
		getTodos().then((todos) =>
			// Dispatch the action to load the todos.
			dispatch(loadTodos(todos))
		);
	};
};

export const saveTodo = (name) => {
	return (dispatch) => {
		dispatch(showMessage("Saving todo..."));
		createTodos(name).then((response) =>
			// Dispatch the action to save the todo.
			dispatch(addTodo(response))
		);
	};
};

export const toggleTodo = (id) => {
	return (dispatch, getState) => {
		dispatch(showMessage("Saving todo update..."));

		const { todos } = getState().todo;
		const todo = todos.find((t) => t.id === id);
		const toggled = { ...todo, isComplete: !todo.isComplete };
		updateTodo(toggled).then((response) => dispatch(replaceTodo(response)));
	};
};

export const deleteTodo = (id) => {
	return (dispatch) => {
		dispatch(showMessage("Deleting todo..."));
		destroyTodo(id).then(() => dispatch(removeTodo(id)));
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
		case TODO_REPLACE:
			return {
				...state,
				todos: state.todos.map((t) =>
					t.id === action.payload.id ? action.payload : t
				),
			};
		case TODO_REMOVE:
			return {
				...state,
				todos: state.todos.filter((t) => t.id !== action.payload),
			};
		case CURRENT_UPDATE:
			return { ...state, currentTodo: action.payload };
		default:
			return state;
	}
};
