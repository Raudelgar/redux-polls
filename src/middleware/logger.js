const logger = (state) => (next) => (action) => {
	console.group(action.type);
	console.log('The action is: ', action);
	const result = next(action);
	console.log('The state is: ', state.getState());
	console.groupEnd();

	return result;
};

export default logger;
