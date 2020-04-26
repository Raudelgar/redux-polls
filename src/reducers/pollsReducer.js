import { RECEIVE_POLLS, UPDATE_POLLS, ADD_ANSWER } from '../actions/types.js';

export default function pollsReducer(state = {}, action) {
	switch (action.type) {
		case RECEIVE_POLLS:
			return Object.assign({}, state, action.payload);
		case UPDATE_POLLS:
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		case ADD_ANSWER:
			const { id, votes, authedUser } = action.payload;
			return {
				...state,
				[id]: {
					...state[id],
					[votes]: state[id][votes].concat([authedUser]),
				},
			};
		default:
			return state;
	}
}
