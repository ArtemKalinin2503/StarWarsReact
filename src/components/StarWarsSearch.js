import React, { Component } from 'react';
//Компонент с полем поиска героев
class StarWarsSearch extends Component {
	render() {
		return (
			<div className="starWarsSearch__wrapper">
				<form className="starWarchHeroes__form">
					<input
						type="text"
						className="starWarchHeroes__input"
						placeholder="Введите имя героя"
						onChange={this.handleChangeSearch}
					/>
				</form>
			</div>
		);
	}
}

export default StarWarsSearch;
