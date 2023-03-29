import React, { Component } from "react";

import "./todo-list-item.css"

export default class TodoListItem extends Component {

	render() {
		const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

		const style = {
			color: important ? "steelblue" : "black",
			fontWeight: important ? "bold" : "normal"
		}

		return <span className={`todo-list-item ${done ? "done" : ""}`}>
			<span
				className="todo-list-item-label"
				style={style}
				onClick={onToggleDone}>
				{label}
			</span>
			<div className="buttons-block">
				<button
					type="button"
					className="btn btn-outline-danger btn-sm"
					onClick={onDeleted}>
					<i className="fa fa-trash" />
				</button>
				<button
					type="button"
					className="btn btn-outline-success btn-sm"
					onClick={onToggleImportant}>
					<i className="fa fa-exclamation" />
				</button>
			</div>
		</span>
	}
}