import React from 'react';
import { connect } from 'react-redux';

import './PollView.css';
import { getPercentage } from '../../../utils/helper';
import { handleAddAnswer } from '../../../actions/answers/answer';
import LoadingBar from 'react-redux-loading-bar';

class PollView extends React.Component {
	handleAnswer = (answer) => {
		const { authedUser, poll } = this.props;
		const { id } = poll;
		this.answered = true;

		this.props.dispatch(handleAddAnswer({ authedUser, id, answer }));
	};

	render() {
		if (!this.props.poll) {
			return <p>This Poll does not exist</p>;
		} else {
			const { poll, user, vote } = this.props;
			const { question } = poll;
			const options = ['aText', 'bText', 'cText', 'dText'];
			const totalVotes = getVotesKey().reduce((total, key) => {
				return total + poll[key].length;
			}, 0);

			return (
				<>
					<LoadingBar style={{ position: 'absolute', top: '0', left: '0' }} />
					<div>
						<div className='poll-container'>
							<h1 className='question'>{question}</h1>
							<div className='poll-author'>
								by
								<img src={user.avatarURL} alt={user.name} />
							</div>
							<ul>
								{options.map((text) => {
									const count = poll[`${text[0]}Votes`].length;
									return (
										<li
											key={text}
											className={`option ${vote === text[0] ? 'choose' : ''}`}
											onClick={() => {
												if (vote === null && !this.answered) {
													this.handleAnswer(text[0]);
												}
											}}
										>
											<div className='result'>
												<span>{poll[text]}</span>
												<span>
													{vote !== null &&
														`${getPercentage(count, totalVotes)}% (${count})`}
												</span>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</>
			);
		}
	}
}

function mapStateToProps({ authedUser, polls, users }, { match }) {
	const { id } = match.params;
	const poll = polls[id];

	if (!poll) {
		return {
			poll: null,
		};
	}

	const vote = getVotesKey().reduce((vote, key) => {
		if (vote !== null) return vote[0];

		return poll[key].includes(authedUser) ? key : vote;
	}, null);

	return {
		poll,
		user: users[authedUser],
		vote,
		authedUser,
	};
}

function getVotesKey() {
	return ['aVotes', 'bVotes', 'cVotes', 'dVotes'];
}

export default connect(mapStateToProps)(PollView);
