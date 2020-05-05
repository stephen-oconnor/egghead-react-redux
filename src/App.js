import React from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Message from "./components/Message/Message";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="todo-app">
					<Message />
					<TodoForm />
					<TodoList />
				</div>
			</header>
		</div>
	);
}
