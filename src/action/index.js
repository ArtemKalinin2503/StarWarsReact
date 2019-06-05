//Action сетевые для полученния данных о всех героях
export const actionGetHeroes = () => {
	return { type: 'GET_HEROES_REQUEST' }; //Данный action нужен для вызова saga getHeroesWalker
};
export const actionSuccessHeroes = (heroes) => {
	return { type: 'GET_HEROES_SUCCESS', payload: heroes }; //Данный action получает данные и передаст их в состояние heroes
};
export const actionStatusHeroes = (isFetching) => {
	return { type: 'STATUS_DATA_HEROES', payload: isFetching }; //Данный action переводит состояние isFetching в true/false
};
export const actionHeroesError = (erorr) => {
	return { type: 'GET_HEROES_FAILED', payload: erorr };
};
//Action сетевые для полчунеия данных о конкретном герое
export const actionGetSelectHeroes = (id) => {
  return { type: 'GET_HEROES_SELECT_REQUEST', payload: id}; //Данный action нужен для вызова saga getHeroesSelectWalker
};
export const actionSuccessSelectHeroes = (heroes) => {
  return { type: 'GET_HEROES_SELECT_SUCCESS', payload: heroes }; //Данный action получает данные и передаст их в состояние heroes_select
};
export const actionStatusSelectHeroes = (isFetching) => {
  return { type: 'STATUS_DATA_SELECT_HEROES', payload: isFetching }; //Данный action переводит состояние isFetching в true/false
};
export const actionGetIdSelectHeroes = (id) => { //Данный action переводит состояние id_select
  return { type: 'GER_ID_SELECT_HEROES', payload: id }
}
