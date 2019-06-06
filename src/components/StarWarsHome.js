import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../store';
import StarWarsFilter from './StarWarsSearch';
import StarWarsPrew from './StarWarsPreview';
import { actionGetHeroes} from '../action';
//Компонент который выводит компонент StarWarsSearch и StarWarsPrew
class StarWarsHome extends Component {
	componentDidMount() {
		store.dispatch(actionGetHeroes()); //Получаем данные в state heroes
	}

	render() {
		//Если загрузка данных закончена
		if (this.props.isFetching) {
			var listHeroes = this.props.heroes.results.map((item, index) => {
        //Фильтр по введенному значению в input
        if(this.props.search_value !== '' && item.name.toLowerCase().indexOf(this.props.search_value.toLowerCase()) === -1 ) {
          return null
        } 
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
				<StarWarsFilter />
				{listHeroes}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	heroes: state.mainReducer.heroes,
	isFetching: state.mainReducer.isFetching,
  search_value: state.mainReducer.search_value
});

const mapDispatchToProps = {};

const StarWarsMain = connect(mapStateToProps, mapDispatchToProps)(StarWarsHome);

export default StarWarsMain;
