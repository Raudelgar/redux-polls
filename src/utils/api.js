import { _getPolls, _getUsers } from './_data.js';

export function fetchAllData() {
	return Promise.all([_getPolls(), _getUsers()])
		.then((results) => results)
		.catch((error) => console.log(error));
}
