import { RESET, SUBMIT, SET_FORM_POLL } from '../actions/types.js';

export default function addPollReducer(state = {}, action) {
	switch (action.type) {
		case SET_FORM_POLL:
			return {
				...state,
				submit: action.payload.submit,
				reset: action.payload.reset,
			};
		case RESET:
			return {
				submit: false,
				reset: false,
				question: '',
				a: '',
				b: '',
				c: '',
				d: '',
			};
		case SUBMIT:
			return Object.assign(state, action.payload);
		default:
			return state;
	}
}
