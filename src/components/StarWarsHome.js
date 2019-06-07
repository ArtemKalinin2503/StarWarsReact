import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../store';
import StarWarsFilter from './StarWarsSearch';
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
      console.log(this.props.heroes)
      //Реализация без action
			// var listHeroes = this.props.heroes.results.filter(test => test.name.toLowerCase().includes(this.props.search_value)).map((item, index) => {
			//   return <StarWarsPrew key={index} name={item.name} id={index} />;
			// });
			if (!this.props.search_value) {
				var listHeroes = this.props.heroes.results.map((item, index) => {
					return <StarWarsPrew key={index} name={item.name} id={item.name} />;
				});
			} else {
				var listHeroes = this.props.filter_heroes.map((item, index) => {
					return <StarWarsPrew key={index} name={item.name} id={item.name} />;
				});
			}
		}
		return (
			<div className="starWarsPage__description">
				<StarWarsFilter />
				{listHeroes}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	heroes: state.mainReducer.heroes,
	isFetching: state.mainReducer.isFetching,
	search_value: state.mainReducer.search_value,
  filter_heroes: state.mainReducer.filter_heroes
});

const mapDispatchToProps = {};

const StarWarsMain = connect(mapStateToProps, mapDispatchToProps)(StarWarsHome);

export default StarWarsMain;
