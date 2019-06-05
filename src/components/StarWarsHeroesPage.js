import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../store';
import { actionGetSelectHeroes } from '../action';
//Компонент который выводит описание выбранного героя
class StarWarsHeroesPage extends Component {
	componentDidMount() {
		store.dispatch(actionGetSelectHeroes(this.props.id_select + 1)); //Добавляем к полученому id единицу так как в качестве id используем index
	}

	render() {
		if (this.props.isFetching) {
			console.log(this.props.heroes_select);
			var heroesName = this.props.heroes_select.name;
      var heroesHeight = this.props.heroes_select.height;
      var heroesMass = this.props.heroes_select.mass;
      var eye_color = this.props.heroes_select.eye_color;
		}
		return (
			<div className="starWarsPage__description">
				<ul>
          <li>Имя: {heroesName}</li>
          <li>Рост: {heroesHeight}см</li>
          <li>Вес: {heroesMass}кг</li>
          <li>Цвет глаз: {eye_color}</li>
        </ul>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	isFetching: state.mainReducer.isFetching,
	id_select: state.mainReducer.id_select,
	heroes_select: state.mainReducer.heroes_select
});

const mapDispatchToProps = {};

const StarWarsPage = connect(mapStateToProps, mapDispatchToProps)(StarWarsHeroesPage);

export default StarWarsPage;
