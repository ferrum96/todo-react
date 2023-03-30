import React, { Component } from "react"

import "./item-status-filter.css"

export default class ItemStatusFilter extends Component {

	filters = [
		{ label: 'All' },
		{ label: 'Active' },
		{ label: 'Done' }
	];

	render() {

		const { filter, onFilterClick } = this.props;
		const buttons = this.filters.map(({ label }) => {
			const isActive = filter === label;
			const activeButton = isActive ? "btn-info" : "btn-outline-second"
			return (
				<button
					key={label}
					type="button"
					className={`btn ${activeButton}`}
					onClick={() => onFilterClick(label)}>
					{label}
				</button>
			);
		})

		return (
			<div className="btn-group">
				{buttons}
			</div>
		)
	};
}