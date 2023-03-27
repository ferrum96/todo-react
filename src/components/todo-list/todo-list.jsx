import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({ todos, onDeleted }) => {

	const items = todos.map((item, id) => {
		return (
			<li key={id} className="list-group-item">
				<TodoListItem 
				{...item}
				onDeleted={() => onDeleted(id)}/>
			</li>
		);
	})

	return (
		<ul className="list-group todo-list">
			{items}
		</ul>
	);
};

export default TodoList;