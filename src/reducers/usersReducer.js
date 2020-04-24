import { RECEIVE_USERS } from '../actions/types.js';

export default function usersReducer(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}
