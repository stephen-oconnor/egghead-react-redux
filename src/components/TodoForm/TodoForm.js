import React from "react";
import { connect } from "react-redux";
import { updateCurrent } from "../../reducers/todo";

const TodoForm = (props) => {
	const { currentTodo, updateCurrent } = props;

	const handleInputChange = (event) => {
		const value = event.target.value;
		updateCurrent(value);
	};

	return (
		<form>
			<input type="text" value={currentTodo} onChange={handleInputChange} />
		</form>
	);
};

// Map slices of state (todos, currentTodo) to props of connected component. Available on props.
const mapStateToProps = (state) => ({ currentTodo: state.currentTodo });

// Bind action creators to dispatch. Available on props.
const mapDispatchToProps = { updateCurrent };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
