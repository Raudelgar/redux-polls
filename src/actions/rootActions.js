import { LOADER_OFF } from './types.js';
import { fetchAllData } from '../utils/api.js';
import { setUsers } from './users/users.js';
import { setPolls } from './polls/polls.js';

function init(arr) {
	return (dispatch) => {
		dispatch(setUsers(arr[1]));
		dispatch(setPolls(arr[0]));
		dispatch(loaderOff());
	};
}

export function loaderOff() {
	return {
		type: LOADER_OFF,
	};
}

export function handleInitialData() {
	return (dispatch) => {
		return fetchAllData().then((res) => dispatch(init(res)));
	};
}
