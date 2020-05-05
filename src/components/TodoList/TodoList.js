import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchTodos,
	toggleTodo,
	deleteTodo,
	getVisibleTodos,
} from "../../reducers/todo";

const TodoItem = ({ id, name, isComplete, toggleTodo, deleteTodo }) => {
	return (
		<li>
			<span className="delete-item">
				<button onClick={() => deleteTodo(id)}>X</button>
			</span>
			<input
				type="checkbox"
				checked={isComplete}
				onChange={() => toggleTodo(id)}
			/>
			{name}
		</li>
	);
};

class TodoList extends Component {
	componentDidMount() {
		this.props.fetchTodos();
	}

	render() {
		return (
			<div className="todo-list">
				<ul>
					{this.props.todos.map((todo) => (
						<TodoItem
							key={todo.id}
							toggleTodo={this.props.toggleTodo}
							deleteTodo={this.props.deleteTodo}
							{...todo}
						/>
					))}
				</ul>
			</div>
		);
	}
}

// Map slices of state (todos, currentTodo) to props of connected component. Available on props.
const mapStateToProps = (state, ownProps) => ({
	todos: getVisibleTodos(state.todo.todos, ownProps.filter),
});

// Bind action creators to dispatch. Available on props.
const mapDispatchToProps = { fetchTodos, toggleTodo, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
