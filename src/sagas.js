import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { actionSuccessHeroes, actionStatusHeroes, actionHeroesError } from './action';
import axios from 'axios';

export default function* rootWatcher() {
  yield takeLatest("GET_HEROES_REQUEST", getHeroesWalker); //Вызов saga getHeroesWalker при вызове action GET_HEROES_REQUEST
}

//Данная saga получит данные с api https://swapi.co
function* getHeroesWalker() {
  yield put(actionStatusHeroes(false));
  //yield delay(3000); //Задержим загрузку данных для preloader
  const response = yield call(axios.get, "https://swapi.co/api/people/"); //С помощью axios выполним  get запрос к указанному api
  if (response.status === 200) {
    yield put(actionSuccessHeroes(response.data)); //Положим полученные данные в state heroes с помощью action actionSuccessHeroes
    yield put(actionStatusHeroes(true)); //Данный  action actionStatusHeroes переведет состояние isFetching в true (данное состояние служит флагом что загрузка  данных завершена)
  } else {
    yield put(actionHeroesError("Error!"));
  }
}
