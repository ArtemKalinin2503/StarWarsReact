import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actionGetIdSelectHeroes } from '../action';
import store from '../store';
//Компонент который выводит ссылки на героев
class StarWarsPrew extends Component {
	//Собитие клика по ссылке
	handleClick = () => {
		store.dispatch(actionGetIdSelectHeroes(this.props.id)); //При клике запишем в состояние id_select данные из this.id.props (которые прокинуты в качестве парметра из компонента StarWarsHome)
	};

	render() {
		return (
			<div className="starWarsHeroes__result">
				<ul className="starWarsHeroes__list">
					<li className="starWarsHeroes__item">
						{/*Вывод ссылок с именами героев, а также пропишем путь к указаному компоненту и переадим id записи в  url*/}
						<Link
							to="/starWarsHeroesPage"
							to={`/starWarsHeroesPage/${this.props.id + 1}`}
							className="starWarsHeroes__link"
							id={this.props.id}
							onClick={this.handleClick}
						>
							{this.props.name}
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default StarWarsPrew;
