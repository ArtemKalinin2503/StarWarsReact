import { combineReducers } from 'redux';

export const initState = {
	id: 0,
	id_select: 0, //В данное состояние приходит id только выбранного героя
	heroes: [], //В данное состояние преходят все основные данные с api
	heroes_select: {}, //Данное состояние преходят данные только для выбранного героя
	search: '',
	isFetching: false, //Данное состояние служит флагом о начале и окончании загрузки (необходимо для устранения асинхронности получения данных)
	error: ''
};

const mainReducer = (state = initState, action) => {
	switch (action.type) {
		//Данный action получает данные
		case 'GET_HEROES_SUCCESS':
			return {
				...state,
				heroes: action.payload
			};
		//Данный action отвечает за переключения состояния isFetching
		case 'STATUS_DATA_HEROES':
			return {
				...state,
				isFetching: action.payload
			};
		//Данный  action выводит ошибки при загрузке данных
		case 'GET_HEROES_FAILED':
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		//Данный action получает данные выбранного героя
		case 'GET_HEROES_SELECT_SUCCESS':
			return {
				...state,
				heroes_select: action.payload
			};
		//Данный action отвечает за переключения состояния isFetching
		case 'STATUS_DATA_SELECT_HEROES':
			return {
				...state,
				isFetching: action.payload
			};
		//Данный action передаст в состояние id_select значение id выбранного героя
		case 'GER_ID_SELECT_HEROES':
			return {
				...state,
				id_select: action.payload
			};

		default:
			return state;
	}
};

const todoApp = combineReducers({
	mainReducer
});

export default todoApp;
