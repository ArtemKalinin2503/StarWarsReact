import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../store';
import StarWarsSearch from './StarWarsSearch';
import StarWarsPrew from './StarWarsPreview';
import { actionGetHeroes } from '../action';
//Компонент который выводит компонент StarWarsSearch и StarWarsPrew
class StarWarsHome extends Component {
	componentDidMount() {
		store.dispatch(actionGetHeroes()); //Получаем данные в state heroes
	}

	render() {
		//Если загрузка данных закончена
		if (this.props.isFetching) {
			var listHeroes = this.props.heroes.results.map((item, index) => {
				return <StarWarsPrew key={index} name={item.name} id={index} />;
			});
		} else {
			return (
				<div className="starWars__preloader">
					<p>Загрузка...</p>
				</div>
			);
		}
		return (
			<div className="starWarsPage__description">
				<StarWarsSearch />
				{listHeroes}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	heroes: state.mainReducer.heroes,
	isFetching: state.mainReducer.isFetching
});

const mapDispatchToProps = {};

const StarWarsMain = connect(mapStateToProps, mapDispatchToProps)(StarWarsHome);

export default StarWarsMain;
