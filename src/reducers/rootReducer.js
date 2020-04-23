import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer.js';
import loadingReducer from './loadingReducer.js';
import usersReducer from './usersReducer.js';
import addPollReducer from './addPollReducer.js';

const INITIAL_STATE = {
	loading: loadingReducer,
	questions: questionsReducer,
	users: usersReducer,
	addPoll: addPollReducer,
};

export default combineReducers(INITIAL_STATE);

/* 
{
	loading: true
	questions: {
		unanswered: {
			active: false,
			questions: []
		},
		answered: {
			active: false,
			questions: []
		}
	},
	users:[
		{
			name: '',
			polls: 2,
			answers: 2
		}
	],
	addPoll: {
		submit: true,
		reset: true,
		question: '',
		optA: '',
		optB: '',
		optC: '',
		optD: ''
	}
}
*/
