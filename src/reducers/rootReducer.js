import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './usersReducer.js';
import pollsReducer from './pollsReducer.js';
import authUserReducer from './authUserReducer.js';

const INITIAL_STATE = {
	authedUser: authUserReducer,
	loadingBar: loadingBarReducer,
	polls: pollsReducer,
	users: usersReducer,
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
