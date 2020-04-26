import { RECEIVE_USERS, UPDATE_POLLS, ADD_ANSWER } from '../actions/types.js';

export default function usersReducer(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.payload,
			};
		case UPDATE_POLLS:
			const { author, id } = action.payload;
			return {
				...state,
				[author]: {
					...state[author],
					polls: state[author].polls.concat([id]),
				},
			};
		case ADD_ANSWER:
			const { authedUser } = action.payload;
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: state[authedUser].answers.concat([action.payload.id]),
				},
			};
		default:
			return state;
	}
}
