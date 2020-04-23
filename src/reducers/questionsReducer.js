import {
	INITIAL_DATA,
	ANSWERED_ACTIVE,
	UNANSWERED_ACTIVE,
} from '../actions/types.js';
import { unanwseredInit, anwseredInit } from '../utils/helper.js';

export default function questionsReducer(state = {}, action) {
	switch (action.type) {
		case INITIAL_DATA:
			return {
				...state,
				unanswered: {
					active: true,
					questions: unanwseredInit(action.payload[0]),
				},
				answered: {
					active: false,
					questions: anwseredInit(action.payload[0]),
				},
			};
		case ANSWERED_ACTIVE:
			return {
				...state,
				unanswered: {
					active: false,
					questions: state.unanswered.questions,
				},
				answered: {
					active: true,
					questions: state.answered.questions,
				},
			};
		case UNANSWERED_ACTIVE:
			return {
				...state,
				unanswered: {
					active: true,
					questions: state.unanswered.questions,
				},
				answered: {
					active: false,
					questions: state.answered.questions,
				},
			};
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
