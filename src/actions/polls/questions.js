import { ANSWERED_ACTIVE, UNANSWERED_ACTIVE } from '../types.js';

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
