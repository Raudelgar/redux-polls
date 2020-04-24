import {
	ADD_QUESTION,
	ADD_OPTA,
	ADD_OPTB,
	ADD_OPTC,
	ADD_OPTD,
	RESET,
	SUBMIT,
	INITIAL_DATA,
} from '../actions/types.js';

import { checkPollSubmit } from '../utils/helper.js';

export default function addPollReducer(state = {}, action) {
	switch (action.type) {
		case ADD_QUESTION:
			return {
				...state,
				question: action.payload,
				reset: false,
				submit: checkPollSubmit(state),
			};
		case ADD_OPTA:
			return {
				...state,
				a: action.payload,
				reset: false,
				submit: checkPollSubmit(state),
			};
		case ADD_OPTB:
			return {
				...state,
				b: action.payload,
				reset: false,
				submit: checkPollSubmit(state),
			};
		case ADD_OPTC:
			return {
				...state,
				c: action.payload,
				reset: false,
				submit: checkPollSubmit(state),
			};
		case ADD_OPTD:
			return {
				...state,
				d: action.payload,
				reset: false,
				submit: checkPollSubmit(state),
			};
		case RESET:
		case INITIAL_DATA:
			return {
				submit: true,
				reset: true,
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

/*
addPoll: {
  submit: true,
  reset: true,
  question: '',
  optA: '',
  optB: '',
  optC: '',
  optD: ''
}
*/
