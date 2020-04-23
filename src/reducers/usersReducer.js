import { INITIAL_DATA } from '../actions/types.js';

export default function usersReducer(state = {}, action) {
	switch (action.type) {
		case INITIAL_DATA:
			return Object.assign({}, state, action.payload[1]);
		default:
			return state;
	}
}
