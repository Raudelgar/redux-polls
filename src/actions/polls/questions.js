import { ANSWERED_ACTIVE, UNANSWERED_ACTIVE, SET_QUESTIONS } from '../types.js';

export function answeredActive() {
	return {
		type: ANSWERED_ACTIVE,
	};
}

export function unansweredActive() {
	return {
		type: UNANSWERED_ACTIVE,
	};
}

function setQuestions(polls) {
	return {
		type: SET_QUESTIONS,
		payload: polls,
	};
}

export function handleQuestions(polls) {
	return (dispatch) => {
		dispatch(setQuestions(polls));
	};
}
