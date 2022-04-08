import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<form onSubmit={this.props.onSubmit} className="flex-cc py-16">
				<input
					value={this.props.value}
					onChange={this.props.onChange}
					type="text"
					className="px-6 w-[500px] h-16 text-[24px] bg-white text-base rounded-lg search-input"
					placeholder="Search something..."
				/>
				<button
					type="submit"
					className="px-8 ml-4 h-16 text-2xl font-semibold bg-white bg-opacity-10 rounded-md hover:bg-blue-500"
				>
					SEARCH!
				</button>
			</form>
		);
	}
}
