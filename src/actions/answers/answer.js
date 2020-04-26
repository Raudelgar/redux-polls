import { savePollAnswer } from '../../utils/api.js';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { ADD_ANSWER } from '../types.js';

function addAnswer({ authedUser, id, answer }) {
	return {
		type: ADD_ANSWER,
		payload: {
			authedUser,
			id,
			votes: `${answer}Votes`,
		},
	};
}

export function handleAddAnswer(data) {
	return (dispatch) => {
		dispatch(showLoading());
		savePollAnswer(data)
			.then(() => dispatch(addAnswer(data)))
			.then(() => dispatch(hideLoading()));
	};
}
