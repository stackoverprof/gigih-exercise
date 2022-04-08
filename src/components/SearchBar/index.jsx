import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<form onSubmit={this.props.onSubmit} className="search-form">
				<input
					value={this.props.value}
					onChange={this.props.onChange}
					type="text"
					className="search-input h-16"
					placeholder="Search something..."
				/>
				<button
					type="submit"
					className="h-16 ml-4 bg-white bg-opacity-10 px-8 rounded-md font-semibold text-2xl"
				>
					SEARCH!
				</button>
			</form>
		);
	}
}
