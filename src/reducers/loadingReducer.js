import { INITIAL_DATA } from '../actions/types.js';

export default function loadingReducer(state = true, action) {
	switch (action.type) {
		case INITIAL_DATA:
			return false;
		default:
			return state;
	}
}
