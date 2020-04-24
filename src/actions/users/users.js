import { RECEIVE_USERS } from '../types';

export function setUsers(users) {
	return {
		type: RECEIVE_USERS,
		payload: users,
	};
}
