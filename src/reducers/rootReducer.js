import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer.js';
import loadingReducer from './loadingReducer.js';
import usersReducer from './usersReducer.js';

const INITIAL_STATE = {
	loading: loadingReducer,
	questions: questionsReducer,
	users: usersReducer,
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
	]
}
*/
