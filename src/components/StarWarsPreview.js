import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Компонент который выводит имена героев
class StarWarsPreview extends Component {
	render() {
		return (
			<div className="starWarsHeroes__result">
				<ul className="starWarsHeroes__list">
					<li className="starWarsHeroes__item">
						<Link to="/starWarsHeroesPage" className="starWarsHeroes__link">
							{this.props.name}
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default StarWarsPreview;
