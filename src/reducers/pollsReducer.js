import { INITIAL_DATA } from '../actions/types.js';

export default function pollsReducer(state = {}, action) {
	switch (action.type) {
		case INITIAL_DATA:
			return Object.assign({}, state, action.payload[0]);
		default:
			return state;
	}
}

/* 
{
	questions: {
		unanswered: {
			active: false,
			questions: []
		},
		answered: {
			active: false,
			questions: []
		}
	}
}
*/
