import { RECEIVE_POLLS, UPDATE_POLLS } from '../actions/types.js';

export default function pollsReducer(state = {}, action) {
	switch (action.type) {
		case RECEIVE_POLLS:
			return Object.assign({}, state, action.payload);
		case UPDATE_POLLS:
			return Object.assign(state, action.payload);
		default:
			return state;
	}
}
