import { INITIAL_DATA } from './types.js';
import { fetchAllData } from '../utils/api.js';

function init(arr) {
	// console.log(arr);
	return {
		type: INITIAL_DATA,
		payload: arr,
	};
}

export function handleInitialData() {
	return (dispatch) => {
		return fetchAllData().then((res) => dispatch(init(res)));
	};
}
