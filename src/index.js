import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './App.css';
import store from "./store";
import StarWarsHeroes from './components/StarWarsSearch';

//Основной компонент 
class App extends Component {
  render() {
    return (
      <div className="App">
        <StarWarsHeroes/>
      </div>
    );
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

