import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionGetHeroes } from '../action';
import { store } from '../store';

class StarWarsSearch extends Component {
	componentDidMount() {
		store.dispatch(actionGetHeroes()); //Получаем данные в  state heroes
	}

	handleChangeSearch = () => {};

	render() {
		console.log(this.props.heroes.results);
		return (
			<div className="starWarchHeroes__wrapper">
				<form className="starWarchHeroes__form">
					<input
						type="text"
						className="starWarchHeroes__input"
						placeholder="Введите имя героя"
						onChange={this.handleChangeSearch}
					/>
					<div className="starWarchHeroes__searchHeroes">
						<p>{this.props.name}</p>
					</div>
				</form>
				<div className="starWarsHeroes__result">
					<ul className="starWarsHeroes__list">
						<li className="starWarsHeroes__item">
							<a href="#" className="starWarsHeroes__link">
								Тестовая ссылка
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	heroes: state.mainReducer.heroes
});

const mapDispatchToProps = {};

const StarWarsHeroes = connect(mapStateToProps, mapDispatchToProps)(StarWarsSearch);

export default StarWarsHeroes;
