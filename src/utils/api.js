import { _getPolls, _getUsers, _savePoll, _savePollAnswer } from './_data.js';
import { isObject } from './helper.js';

function flattenPoll(poll) {
	return Object.keys(poll).reduce((flattenedPoll, key) => {
		const val = poll[key];

		if (isObject(val)) {
			flattenedPoll[key + 'Text'] = val.text;
			flattenedPoll[key + 'Votes'] = val.votes;
			return flattenedPoll;
		}

		flattenedPoll[key] = val;
		return flattenedPoll;
	}, {});
}
function formatPolls(polls) {
	const pollIds = Object.keys(polls);

	return pollIds.reduce((formattedPolls, id) => {
		formattedPolls[id] = flattenPoll(polls[id]);
		return formattedPolls;
	}, {});
}

function formatUsers(users) {
	return Object.keys(users).reduce((formattedUsers, id) => {
		const user = users[id];

		formattedUsers[id] = {
			...user,
			answers: Object.keys(user.answers),
		};

		return formattedUsers;
	}, {});
}

// export function getInitialData() {
// 	return Promise.all([_getUsers(), _getPolls()]).then(([users, polls]) => ({
// 		users: formatUsers(users),
// 		polls: formatPolls(polls),
// 	}));
// }

export function savePoll(poll) {
	return _savePoll(poll).then((p) => flattenPoll(p));
}

export function savePollAnswer(args) {
	return _savePollAnswer(args);
}

//Mine functions
export function fetchAllData() {
	return Promise.all([_getPolls(), _getUsers()])
		.then(([polls, users]) => [formatPolls(polls), formatUsers(users)])
		.catch((error) => console.log(error));
}

export function postNewPoll(poll) {
	return _savePoll(poll)
		.then((res) => flattenPoll(res))
		.catch((error) => console.log(error));
}
