import { postNewPoll } from '../../utils/api';
import { updatePolls } from './polls';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleSubmitPoll(poll) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());
		return postNewPoll({
			...poll,
			author: authedUser,
		})
			.then((res) => dispatch(updatePolls(res)))
			.then(() => dispatch(hideLoading()));
	};
}
