import React from "react";
import { connect } from "react-redux";

const TodoItem = ({ id, name, isComplete }) => {
	return (
		<li>
			<input type="checkbox" defaultChecked={isComplete} />
			{name}
		</li>
	);
};

const TodoList = ({ todos }) => {
	return (
		<div className="todo-list">
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</div>
	);
};

// Map slices of state (todos, currentTodo) to props of connected component. Available on props.
const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList);
