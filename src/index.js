import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import store from './store';
import StarWarsHome from './components/StarWarsHome';
import StarWarsHeroesPage from './components/StarWarsHeroesPage';

//Основной компонент
class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route path="/" component={StarWarsHome} exact />
						<Route path="/starwarsHeroesPage" component={StarWarsHeroesPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
