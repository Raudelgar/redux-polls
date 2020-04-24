import { _getPolls, _getUsers, _savePoll } from './_data.js';

export function fetchAllData() {
	return Promise.all([_getPolls(), _getUsers()])
		.then((results) => results)
		.catch((error) => console.log(error));
}

export function postNewPoll(poll) {
	return _savePoll(poll)
		.then((res) => res)
		.catch((error) => console.log(error));
}
