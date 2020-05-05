import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../../reducers/todo";

const TodoItem = ({ name, isComplete }) => {
	return (
		<li>
			<input type="checkbox" defaultChecked={isComplete} />
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
						<TodoItem key={todo.id} {...todo} />
					))}
				</ul>
			</div>
		);
	}
}

// Map slices of state (todos, currentTodo) to props of connected component. Available on props.
const mapStateToProps = (state) => ({ todos: state.todos });

// Bind action creators to dispatch. Available on props.
const mapDispatchToProps = { fetchTodos };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
