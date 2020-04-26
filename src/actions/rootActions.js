import { fetchAllData } from '../utils/api.js';
import { setUsers } from './users/users.js';
import { setPolls } from './polls/polls.js';
import { setAuthUser } from './auth/auth.js';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

//Mocking User Auth
const AUTHED_ID = 'raudelgar';
// const AUTHED_ID = 'tylermcginnis';

function init(arr) {
	return (dispatch) => {
		dispatch(setUsers(arr[1]));
		dispatch(setPolls(arr[0]));
		dispatch(setAuthUser(AUTHED_ID));
		dispatch(hideLoading());
	};
}

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return fetchAllData().then(
			(res) => console.log('mine', res) || dispatch(init(res))
		);
	};
}
