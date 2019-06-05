import { combineReducers } from 'redux';

export const initState = {
	id: 0,
	heroes: [], //В данное состояние преходят все основные данные с api
	description: '',
	gender: '',
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
		default:
			return state;
	}
};

const todoApp = combineReducers({
	mainReducer
});

export default todoApp;
