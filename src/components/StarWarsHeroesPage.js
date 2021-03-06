import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../store';
import { actionGetSelectHeroes, actionFilterFlag } from '../action';
//Компонент который выводит описание выбранного героя
class StarWarsHeroesPage extends Component {
	componentDidMount() {
		store.dispatch(actionGetSelectHeroes(this.props.id_select)); //Добавляем к полученому id единицу так как в качестве id используем index
		store.dispatch(actionFilterFlag());
	}

	render() {
		//Проверка если данные загружены (дополнительный state_flag - нужен чтобы убрать асинхронность)
		if (this.props.isFetching && this.props.state_flag) {
			var heroesDescription = this.props.heroes_select.results.map((item) => {
				return (
          <div>
            <h1 className="starWarsPage__title">The Star Wars</h1>
            <ul className="starWars__description-list">
              <li>Имя: {item.name}</li>
              <li>Рост: {item.height}см</li>
              <li>Вес: {item.mass}кг</li>
              <li>Цвет глаз: {item.eye_color}</li>
            </ul>
          </div>
				);
			});
		}
		return (
      <div className={this.props.isFetching ? 'starWars_wrapper' : 'starWars_wrapper preloader'}>
        <div class="lds-hourglass"></div>
				<div className="starWarsPage__description">{heroesDescription}</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	isFetching: state.mainReducer.isFetching,
	id_select: state.mainReducer.id_select,
	heroes_select: state.mainReducer.heroes_select,
	state_flag: state.mainReducer.state_flag
});

const mapDispatchToProps = {};

const StarWarsPage = connect(mapStateToProps, mapDispatchToProps)(StarWarsHeroesPage);

export default StarWarsPage;
