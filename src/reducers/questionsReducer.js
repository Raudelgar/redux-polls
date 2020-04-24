import {
	ANSWERED_ACTIVE,
	UNANSWERED_ACTIVE,
	SET_QUESTIONS,
	UPDATE_QUESTIONS,
} from '../actions/types.js';
import {
	unanwseredInit,
	anwseredInit,
	unanwseredUpdate,
} from '../utils/helper.js';

export default function questionsReducer(state = {}, action) {
	switch (action.type) {
		case SET_QUESTIONS:
			return {
				...state,
				unanswered: {
					active: true,
					questions: unanwseredInit(action.payload),
				},
				answered: {
					active: false,
					questions: anwseredInit(action.payload),
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
		case UPDATE_QUESTIONS: //is not needed
			return {
				...state,
				unanswered: {
					...state.unanswered,
					questions: state.unanswered.questions.concat(
						unanwseredUpdate(action.payload)
					),
				},
			};
		default:
			return state;
	}
}
