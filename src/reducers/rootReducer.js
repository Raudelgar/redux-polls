import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer.js';
import loadingReducer from './loadingReducer.js';
import usersReducer from './usersReducer.js';
import addPollReducer from './addPollReducer.js';
import pollsReducer from './pollsReducer.js';

const INITIAL_STATE = {
	loading: loadingReducer,
	questions: questionsReducer,
	polls: pollsReducer,
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
			questions: [
				{
					id:
					question
				}
			]
		},
		answered: {
			active: false,
			questions: [
				{
					id:
					question
				}
			]
		}
	},
	polls: {
		* sames as DB 
	}
	users: {
		* sames as DB
	}
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
