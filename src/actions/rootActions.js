import {
	RECEIVE_USERS,
	RECEIVE_POLLS,
	LOADER_OFF,
	UPDATE_POLLS,
} from './types.js';
import { fetchAllData } from '../utils/api.js';

function init(arr) {
	return (dispatch) => {
		dispatch(setUsers(arr[1]));
		dispatch(setPolls(arr[0]));
		dispatch(loaderOff());
	};
}

function setUsers(users) {
	return {
		type: RECEIVE_USERS,
		payload: users,
	};
}

function setPolls(polls) {
	return {
		type: RECEIVE_POLLS,
		payload: polls,
	};
}

export function updatePolls(poll) {
	return {
		type: UPDATE_POLLS,
		payload: poll,
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
