import React, {Component} from "react"

import "./item-status-filter.css"

export default class ItemStatusFilter extends Component {

	render() {

		// const {} = this.props;

		return (
			<div className="btn-group">
				<button className="btn btn-info">All</button>
				<button className="btn btn-outline-second">Active</button>
				<button className="btn btn-outline-second">Done</button>
			</div>
		)
	};
}