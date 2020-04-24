import { INITIAL_DATA, RECEIVE_USERS } from '../actions/types.js';

export default function usersReducer(state = {}, action) {
	switch (action.type) {
		case INITIAL_DATA:
			return Object.assign({}, state, action.payload[1]);
		case RECEIVE_USERS:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}
