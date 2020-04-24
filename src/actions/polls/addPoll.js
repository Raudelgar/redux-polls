import {
	ADD_QUESTION,
	ADD_OPTA,
	ADD_OPTB,
	ADD_OPTC,
	ADD_OPTD,
	RESET,
} from '../types';
import { postNewPoll } from '../../utils/api';
import { updatePolls } from '../rootActions';

export function addQuestion(str) {
	return {
		type: ADD_QUESTION,
		payload: str,
	};
}

export function addOptA(str) {
	return {
		type: ADD_OPTA,
		payload: str,
	};
}

export function addOptB(str) {
	return {
		type: ADD_OPTB,
		payload: str,
	};
}

export function addOptC(str) {
	return {
		type: ADD_OPTC,
		payload: str,
	};
}

export function addOptD(str) {
	return {
		type: ADD_OPTD,
		payload: str,
	};
}

export function reset() {
	return {
		type: RESET,
	};
}

function submit(formatedPoll) {
	const idP = formatedPoll.id;
	const poll = {
		[idP]: {
			id: idP,
			question: formatedPoll.question,
			timestamp: formatedPoll.timestamp,
			a: formatedPoll.a,
			b: formatedPoll.b,
			c: formatedPoll.c,
			d: formatedPoll.d,
		},
	};
	return (dispatch) => {
		dispatch(updatePolls(poll));
	};
}

export function handleSubmitPoll(poll) {
	return (dispatch) => {
		postNewPoll(poll).then((res) => dispatch(submit(res)));
	};
}
