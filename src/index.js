import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'; //Подключаем React-Redux
import './App.css';
import StarWarsSearch from './components/StarWarsSearch';

//Основной компонент 
class App extends Component {
  render() {
    return (
      <div className="App">
        <StarWarsSearch/>
      </div>
    );
  }
};

//Обварачиваем основной компонет в расширение Provider для подключение хранилища 
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Switch>
         <App />
         <Route path="/" exact component={MainComponent}></Route> {/*exact - значит при загрузке страницы сразу отрисуем данный компонент  */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

