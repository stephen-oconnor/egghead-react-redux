export const getTodos = () => {
	return fetch("http://localhost:8080/todos").then((response) =>
		response.json()
	);
};

export const createTodos = (name) => {
	return fetch("http://localhost:8080/todos", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name: name, isComplete: false }),
	}).then((response) => response.json());
};

export const updateTodo = (todo) => {
	return fetch(`http://localhost:8080/todos/${todo.id}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	}).then((response) => response.json());
};

export const destroyTodo = (id) => {
	return fetch(`http://localhost:8080/todos/${id}`, {
		method: "DElEtE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	});
};
