import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../store';
import { actionGetValueSearch, actionFilterHeroes } from '../action';
//Компонент с полем поиска героев
class StarWarsSearch extends Component {
	handleChangeSearch = (event) => {
		let searchValue = event.target.value;
		store.dispatch(actionGetValueSearch(searchValue.trim()));
    store.dispatch(actionFilterHeroes(this.props.search_value));  
	};

	render() {
		return (
			<div className="starWarsSearch__wrapper">
				<form className="starWarchHeroes__form">
					<input
						type="text"
						className="starWarchHeroes__input"
						placeholder="Введите имя героя"
            value={this.props.search_value}
						onChange={this.handleChangeSearch}
					/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	search_value: state.mainReducer.search_value,
  filter_heroes: state.mainReducer.filter_heroes
});

const mapDispatchToProps = {};

const StarWarsFilter = connect(mapStateToProps, mapDispatchToProps)(StarWarsSearch);

export default StarWarsFilter;
