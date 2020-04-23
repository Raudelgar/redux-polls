import { INITIAL_DATA } from '../actions/types.js';
import { usersInit } from '../utils/helper.js';

export default function usersReducer(state = [], action) {
	switch (action.type) {
		case INITIAL_DATA:
			return state.concat(usersInit(action.payload[1]));
		default:
			return state;
	}
}

/* 
{
	users:[
		{
			id:
			name: '',
			avatar: 
			polls: 2,
			answers: 2
		}
	]
}
*/
