import React from 'react';
import { connect } from 'react-redux';

import Questions from './Questions.js';
import {
	answeredActive,
	unansweredActive,
	handleQuestions,
} from '../../../actions/polls/questions.js';
import './Home.css';

class Home extends React.Component {
	componentDidMount() {
		this.props.dispatch(handleQuestions(this.props.polls));
	}

	answeredActive = () => this.props.dispatch(answeredActive());
	unansweredActive = () => this.props.dispatch(unansweredActive());

	render() {
		const { questions } = this.props;
		return (
			<>
				{Object.keys(questions).length && (
					<div>
						<div className='dashboard-toggle'>
							<button
								style={{
									textDecoration: questions.unanswered.active
										? 'underline'
										: 'none',
								}}
								onClick={this.unansweredActive}
							>
								Unanswered
							</button>
							<span> | </span>
							<button
								style={{
									textDecoration: questions.answered.active
										? 'underline'
										: 'none',
								}}
								onClick={this.answeredActive}
							>
								Answered
							</button>
						</div>
						<ul className='dashboard-list'>
							{questions.unanswered.active && (
								<Questions list={questions.unanswered.questions} />
							)}
							{questions.answered.active && (
								<Questions list={questions.answered.questions} />
							)}
						</ul>
					</div>
				)}
			</>
		);
	}
}

export default connect((state) => ({
	polls: state.polls,
	questions: state.questions,
}))(Home);
