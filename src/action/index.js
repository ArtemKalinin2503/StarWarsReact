//Action сетевые для полученния данных о всех героях
export const actionGetHeroes = () => {
	return { type: 'GET_HEROES_REQUEST' }; //Данный action нужен для вызова saga getHeroesWalker
};
//Данный action получает данные и передаст их в состояние heroes
export const actionSuccessHeroes = (heroes) => {
	return { type: 'GET_HEROES_SUCCESS', payload: heroes }; 
};
//Данный action переводит состояние isFetching в true/false
export const actionStatusHeroes = (isFetching) => {
	return { type: 'STATUS_DATA_HEROES', payload: isFetching }; 
};
export const actionHeroesError = (erorr) => {
	return { type: 'GET_HEROES_FAILED', payload: erorr };
};
//Action сетевые для полчунеия данных о конкретном герое
export const actionGetSelectHeroes = (id) => {
	return { type: 'GET_HEROES_SELECT_REQUEST', payload: id }; //Данный action нужен для вызова saga getHeroesSelectWalker
};
//Данный action получает данные и передаст их в состояние heroes_select
export const actionSuccessSelectHeroes = (heroes) => {
	return { type: 'GET_HEROES_SELECT_SUCCESS', payload: heroes }; 
};
//Данный action переводит состояние isFetching в true/false
export const actionStatusSelectHeroes = (isFetching) => {
	return { type: 'STATUS_DATA_SELECT_HEROES', payload: isFetching }; 
};
	//Данный action переводит состояние id_select
export const actionGetIdSelectHeroes = (id) => {
	return { type: 'GET_ID_SELECT_HEROES', payload: id };
};
//Action  получает значение из value поля ввода поиска
export const actionGetValueSearch = (value) => {
	return { type: 'GET_VALUE_INPUT_SEARCH', payload: value };
};
//Action  фильтрует массив с героями
export const actionFilterHeroes = (arr) => {
  return { type: 'FILTER_HEROES_LIST', payload: arr };
};
export const actionHeroesFilterError = (erorr) => {
  return { type: 'GET_HEROES_FILTER_FAILED', payload: erorr };
};
//Action который выступает дополнительным флагом загрузки для предотвращения асинхронности
export const actionFilterFlag = (value) => {
  return { type: 'ACTION_FLAG', payload: value };
};
