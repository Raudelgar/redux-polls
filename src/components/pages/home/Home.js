import React from 'react';
import { connect } from 'react-redux';

import Questions from './Questions.js';
// import { handleQuestions } from '../../../actions/polls/questions.js';
import './Home.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showAnswered: false,
		};
	}

	render() {
		const { questions } = this.props;

		return (
			<>
				{Object.keys(questions).length && (
					<div>
						<div className='dashboard-toggle'>
							<button
								style={{
									textDecoration: !this.state.showAnswered
										? 'underline'
										: 'none',
								}}
								onClick={() => this.setState({ showAnswered: false })}
							>
								Unanswered
							</button>
							<span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
								{' '}
								|{' '}
							</span>
							<button
								style={{
									textDecoration: this.state.showAnswered
										? 'underline'
										: 'none',
								}}
								onClick={() => this.setState({ showAnswered: true })}
							>
								Answered
							</button>
						</div>
						<ul className='dashboard-list'>
							{!this.state.showAnswered && (
								<Questions list={questions.unanswered.questions} />
							)}
							{this.state.showAnswered && (
								<Questions list={questions.answered.questions} />
							)}
						</ul>
					</div>
				)}
			</>
		);
	}
}

function mapStateToProps({ authedUser, users, polls }) {
	const userAnswers = users[authedUser].answers;
	const answeresPoll = userAnswers
		.map((id) => polls[id])
		.sort((a, b) => a.timestamp - b.timstamp);
	const unansweresPoll = Object.keys(polls)
		.filter((id) => !userAnswers.includes(id))
		.map((id) => polls[id])
		.sort((a, b) => a.timestamp - b.timstamp);

	return {
		questions: {
			unanswered: {
				questions: unansweresPoll,
			},
			answered: {
				questions: answeresPoll,
			},
		},
	};
}

export default connect(mapStateToProps)(Home);
