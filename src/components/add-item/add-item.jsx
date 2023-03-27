import React, { Component } from "react";

import "./add-item.css"

export default class AddItem extends Component {

	state = {
		label: ''
	}

	handleChange = (event) => {
		this.setState({ label: event.target.value });
	}

	render() {
		const { onAdded } = this.props;
		const itemText = "What do you want to do?"
		let labelText = this.state.label;

		return <div className="add-item">
			<input
				type="text"
				className="item__field"
				placeholder={itemText}
				value={labelText}
				onChange={this.handleChange} />
			<button
				type="button"
				className="btn btn-outline-success btn-xl"
				onClick={() => {
					if (labelText !== '') {
						onAdded(labelText);
						this.setState({ label: '' });
					}
				}}>
				<i className="fa fa-plus" />
			</button>
		</div>
	}
}