import React from 'react';

import Questions from './Questions.js';
import {
	answeredActive,
	unansweredActive,
} from '../../../actions/polls/questions.js';
import './Home.css';

class Home extends React.Component {
	answeredActive = () => this.props.dispatch(answeredActive());
	unansweredActive = () => this.props.dispatch(unansweredActive());

	render() {
		const { questions } = this.props;
		const { unanswered, answered } = questions;
		return (
			<div>
				<div className='dashboard-toggle'>
					<button
						style={{
							textDecoration: unanswered.active ? 'underline' : 'none',
						}}
						onClick={this.unansweredActive}
					>
						Unanswered
					</button>
					<span> | </span>
					<button
						style={{
							textDecoration: answered.active ? 'underline' : 'none',
						}}
						onClick={this.answeredActive}
					>
						Answered
					</button>
				</div>
				<ul className='dashboard-list'>
					{unanswered.active && <Questions list={unanswered.questions} />}
					{answered.active && <Questions list={answered.questions} />}
				</ul>
			</div>
		);
	}
}

export default Home;
