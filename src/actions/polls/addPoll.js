import {
	ADD_QUESTION,
	ADD_OPTA,
	ADD_OPTB,
	ADD_OPTC,
	ADD_OPTD,
	RESET,
	SUBMIT,
} from '../types';

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

export function submit() {
	return {
		type: SUBMIT,
	};
}
