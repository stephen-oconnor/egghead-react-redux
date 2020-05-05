import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Message from "./components/Message/Message";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<div className="todo-app">
						<Message />
						<TodoForm />
						<Route
							path="/:filter?"
							render={({ match }) => <TodoList filter={match.params.filter} />}
						/>
						<Footer />
					</div>
				</header>
			</div>
		</Router>
	);
}
