import { RESET, SET_FORM_POLL } from '../types';
import { postNewPoll } from '../../utils/api';
import { updatePolls } from './polls';
import { checkPollSubmit, checkPollReset } from '../../utils/helper';

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

export function handlePollForm(poll) {
	console.log(poll);
	return {
		type: SET_FORM_POLL,
		payload: {
			submit: checkPollSubmit(poll),
			reset: checkPollReset(poll),
		},
	};
}

export function handleSubmitPoll(poll) {
	return (dispatch) => {
		postNewPoll(poll).then((res) => dispatch(submit(res)));
	};
}
