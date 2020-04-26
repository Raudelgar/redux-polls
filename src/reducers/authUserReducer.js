import { SET_AUTH_USER } from '../actions/types';

export default function authUserReducer(state = '', action) {
	switch (action.type) {
		case SET_AUTH_USER:
			return action.payload;
		default:
			return state;
	}
}
