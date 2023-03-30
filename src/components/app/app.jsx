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
			this.createTodoLabel("Drink coffee"),
			this.createTodoLabel("Eat sandwich"),
			this.createTodoLabel("Walking with a dog"),
			this.createTodoLabel("Learn english"),
			this.createTodoLabel("Check email"),
		],
		term: ''
	}

	createTodoLabel(label) {
		return {
			label,
			important: false,
			done: false,
		}
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
				todos: [...todos, this.createTodoLabel(label)] // create new array with new element
			};
		});
	}

	toggleProperty(array, id, propName) {

		const oldItem = array[id];
		const newItem = { ...oldItem, [propName]: !oldItem[propName] };

		return [...array.slice(0, id), newItem, ...array.slice(id + 1)]; 
	}

	onToggleImportant = (id) => {
		this.setState(({ todos }) => {
			return {
				todos: this.toggleProperty(todos, id, 'important')
			}
		});
	}

	onToggleDone = (id) => {
		this.setState(({ todos }) => {
			return {
				todos: this.toggleProperty(todos, id, 'done')
			}
		});
	}

	onSearchChange = (term) => {
		this.setState({ term });
	}

	render() {

		const { todos, term } = this.state;
		const doneCount = todos.filter((el) => el.done).length;
		const todoCount = todos.length - doneCount;
		const searchedItems = (term.length !== 0)
			? todos.filter((element) => element.label.toLowerCase().includes(term.toLowerCase()))
			: todos;

		return <div className="container">
			<AppHeader
				todo={todoCount}
				done={doneCount} />
			<SearchPanel onSearchChange={this.onSearchChange} />
			<ItemStatusFilter />
			<TodoList
				todos={searchedItems}
				onDeleted={this.deleteItem}
				onToggleImportant={this.onToggleImportant}
				onToggleDone={this.onToggleDone} />
			<AddItem onAdded={this.addItem} />
		</div >
	}
}