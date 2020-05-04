import React from "react";

export default function TodoForm(props) {
	const { currentTodo, changeCurrent } = props;

	const handleInputChange = (event) => {
		const value = event.target.value;
		changeCurrent(value);
	};

	return (
		<form>
			<input type="text" value={currentTodo} onChange={handleInputChange} />
		</form>
	);
}
