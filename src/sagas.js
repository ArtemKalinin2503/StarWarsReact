import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import {
	actionSuccessHeroes,
	actionStatusHeroes,
	actionHeroesError,
	actionSuccessSelectHeroes,
  actionStatusSelectHeroes,
  actionHeroesFilterError
} from './action';
import axios from 'axios';

export default function* rootWatcher() {
	yield takeLatest('GET_HEROES_REQUEST', getHeroesWalker); //Вызов saga getHeroesWalker при вызове action GET_HEROES_REQUEST
  yield takeLatest('GET_HEROES_SELECT_REQUEST', getHeroesSelectWalker);
}

//Данная saga получит данные с api https://swapi.co
function* getHeroesWalker() {
	yield put(actionStatusHeroes(false));
	//yield delay(3000); //Задержим загрузку данных для preloader
  const response = yield call(axios.get, 'https://swapi.co/api/people/?search='); //С помощью axios выполним  get запрос к указанному api
	if (response.status === 200) {
		yield put(actionSuccessHeroes(response.data)); //Положим полученные данные в state heroes с помощью action actionSuccessHeroes
		yield put(actionStatusHeroes(true)); //Данный  action actionStatusHeroes переведет состояние isFetching в true (данное состояние служит флагом что загрузка  данных завершена)
	} else {
		yield put(actionHeroesError('Error!'));
	}
}

//Данная saga получит данные исходя из выбраного героя (в url подставляем action который вызывает данную сагу в нашем случае это actionGetSelectHeroes)
//Когда будет происходить store.dispatch данного action, в качестве парметра указываем полученный id героя из state id_select
function* getHeroesSelectWalker(action) {
	yield put(actionStatusSelectHeroes(false));
	//yield delay(3000); //Задержим загрузку данных для preloader
  const response = yield call(axios.get, `https://swapi.co/api/people/?search=${action.payload}`); //С помощью axios выполним  get запрос к указанному api
	if (response.status === 200) {
		yield put(actionSuccessSelectHeroes(response.data)); //Положим полученные данные в state heroes с помощью action actionSuccessHeroes
		yield put(actionStatusSelectHeroes(true)); //Данный  action actionStatusHeroes переведет состояние isFetching в true (данное состояние служит флагом что загрузка  данных завершена)
  } else {
    yield put(actionHeroesFilterError('Error!'));
  }
}

