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
			if (year !== '2017') {
				obj.id = polls[key].id;
				obj.question = polls[key].question;

				result.push(obj);
			}
		}
	}
	return result;
}

export function unanwseredUpdate(poll) {
	const result = [];
	for (const key in poll) {
		let obj = {};
		if (poll.hasOwnProperty(key)) {
			obj.id = poll[key].id;
			obj.question = poll[key].question;

			result.push(obj);
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

export function checkPollSubmit(poll) {
	if (
		poll.question &&
		poll.question.trim().length > 0 &&
		poll.a &&
		poll.a.trim().length > 0 &&
		poll.b &&
		poll.b.trim().length > 0 &&
		poll.c &&
		poll.c.trim().length > 0 &&
		poll.d &&
		poll.d.trim().length > 0
	) {
		return true;
	}

	return false;
}

export function checkPollReset(poll) {
	if (
		poll.question.trim().length > 0 ||
		poll.a.trim().length > 0 ||
		poll.b.trim().length > 0 ||
		poll.c.trim().length > 0 ||
		poll.d.trim().length > 0
	) {
		return true;
	}

	return false;
}
