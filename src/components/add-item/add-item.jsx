import React, { Component } from "react";

import "./add-item.css"

export default class AddItem extends Component {

	state = {
		label: ''
	}

	handleChange = (event) => {
		this.setState({
			label: event.target.value
		});
	}

	onSubmit = (event) => {
		event.preventDefault();
		let labelText = this.state.label;
		if (labelText !== '') {
			this.props.onAdded(labelText);
			this.setState({ label: '' });
		}
	}

	render() {
		return (
			<form className="add-item d-flex"
				onSubmit={this.onSubmit}>
				<input
					type="text"
					className="item__field"
					placeholder="What do you want to do?"
					value={this.state.label}
					onChange={this.handleChange} />
				<button
					className="btn btn-outline-success btn-xl">
					<i className="fa fa-plus" />
				</button>
			</form>
		)
	}
}