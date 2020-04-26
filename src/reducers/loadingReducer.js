import { LOADER_OFF } from '../actions/types.js';

export default function loadingReducer(state = true, action) {
	switch (action.type) {
		case LOADER_OFF:
			return false;
		default:
			return state;
	}
}
