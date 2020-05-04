import React from "react";
import { connect } from "react-redux";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { updateCurrent } from "./reducers/todo";
import "./App.css";

function App({ todos, currentTodo, updateCurrent }) {
	return (
		<div className="App">
			<header className="App-header">
				<div className="todo-app">
					<TodoForm currentTodo={currentTodo} changeCurrent={updateCurrent} />
					<TodoList todos={todos} />
				</div>
			</header>
		</div>
	);
}

// Map slices of state to props of connected component.
const mapStateToProps = (state) => state;

// Bind action creators to dispatch.
const mapDispatchToProps = { updateCurrent };

// Wrap App component in connect.
export default connect(mapStateToProps, mapDispatchToProps)(App);
