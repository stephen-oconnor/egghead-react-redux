import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrent, saveTodo } from "../../reducers/todo";

class TodoForm extends Component {
	handleInputChange = (event) => {
		this.props.updateCurrent(event.target.value);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.saveTodo(this.props.currentTodo);
	};

	render() {
		const { currentTodo } = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={currentTodo}
					onChange={this.handleInputChange}
				/>
			</form>
		);
	}
}

// Map slices of state (todos, currentTodo) to props of connected component. Available on props.
const mapStateToProps = (state) => ({ currentTodo: state.currentTodo });

// Bind action creators to dispatch. Available on props.
const mapDispatchToProps = { updateCurrent, saveTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
