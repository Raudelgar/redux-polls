export function questionsHelper(polls) {
	const result = [];
	for (const key in polls) {
		let obj = {};
		if (polls.hasOwnProperty(key)) {
			console.log(polls[key].question);
			console.log(new Date(polls[key].timestamp).getFullYear());
			obj.id = polls[key].id;
			obj.question = polls[key].question;

			result.push(obj);
		}
	}
	return result;
}

//TODO: //I don't know how to find which question is unanswered or answered

export function unanwseredInit(polls) {
	const result = [];
	for (const key in polls) {
		let obj = {};
		if (polls.hasOwnProperty(key)) {
			let year = new Date(polls[key].timestamp).getFullYear().toString();
			if (year === '2016') {
				obj.id = polls[key].id;
				obj.question = polls[key].question;

				result.push(obj);
			}
		}
	}
	return result;
}

export function anwseredInit(polls) {
	const result = [];
	for (const key in polls) {
		let obj = {};
		if (polls.hasOwnProperty(key)) {
			let year = new Date(polls[key].timestamp).getFullYear().toString();
			if (year === '2017') {
				obj.id = polls[key].id;
				obj.question = polls[key].question;

				result.push(obj);
			}
		}
	}
	return result;
}

export function usersInit(users) {
	const result = [];
	for (const key in users) {
		let obj = {};
		if (users.hasOwnProperty(key)) {
			obj.id = users[key].id;
			obj.name = users[key].name;
			obj.avatar = users[key].avatarURL;
			obj.polls = users[key].polls.length;
			obj.answers = Object.keys(users[key].answers).length;

			result.push(obj);
		}
	}
	return result;
}

export function checkPollSubmit(poll) {
	if (
		poll.question &&
		poll.question.trim().length > 0 &&
		poll.optA &&
		poll.optA.trim().length > 0 &&
		poll.optB &&
		poll.optB.trim().length > 0 &&
		poll.optC &&
		poll.optC.trim().length > 0 &&
		poll.optD &&
		poll.optD.trim().length > 0
	) {
		return false;
	}

	return true;
}
