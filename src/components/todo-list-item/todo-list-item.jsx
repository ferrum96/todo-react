import React, { Component } from "react";

import "./todo-list-item.css"

export default class TodoListItem extends Component {

	state = {
		done: false,
		important: false
	}

	onClickLabel = () => {
		this.setState(({ done }) => {
			return {
				done: !done
			};
		});
	}

	onMarkImportant = () => {
		this.setState(({ important }) => {
			return {
				important: !important
			};
		});
	}

	render() {
		const { label, onDeleted } = this.props;
		const { done, important } = this.state;

		const style = {
			color: important ? "steelblue" : "black",
			fontWeight: important ? "bold" : "normal"
		}

		return <span className={`todo-list-item ${done ? "done" : ""}`}>
			<span
				className="todo-list-item-label"
				style={style}
				onClick={this.onClickLabel}>
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
					onClick={this.onMarkImportant}>
					<i className="fa fa-exclamation" />
				</button>
			</div>
		</span>
	}
}