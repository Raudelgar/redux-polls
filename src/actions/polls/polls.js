import { RECEIVE_POLLS, UPDATE_POLLS } from '../types';

export function setPolls(polls) {
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
