//Action сетевые
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
