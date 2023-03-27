import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import "./app.css"
import AddItem from "../add-item/add-item";

export default class App extends Component {

	state = {
		todos: [
			{ label: "Drink coffee" },
			{ label: "Eat sandwich" },
			{ label: "Walking with a dog" },
			{ label: "Learn english" },
			{ label: "Check email" },
		]
	}

	deleteItem = (id) => {
		this.setState(({ todos }) => {
			return {
				todos: [...todos.slice(0, id), ...todos.slice(id + 1)] // create new array without element with index "id"
			};
		})
	}

	addItem = (label) => {
		this.setState(({ todos }) => {
			return {
				todos: [...todos, { label: label }] // create new array with new element
			};
		});
	}

	render() {

		return <div className="container">
			<AppHeader todo={1} done={3} />
			<SearchPanel />
			<ItemStatusFilter />
			<TodoList
				todos={this.state.todos}
				onDeleted={this.deleteItem} />
			<AddItem
				onAdded={this.addItem} />
		</div >
	}
}