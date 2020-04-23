import React from 'react';
import { connect } from 'react-redux';

import './PollView.css';

class PollView extends React.Component {
	render() {
		const { id } = this.props.match.params;
		const { question, author, a, b, c, d } = this.props.polls[id];
		const user = this.props.users[author];
		return (
			<div>
				<div className='poll-container'>
					<h1 className='question'>{question}</h1>
					<div className='poll-author'>
						by
						<img src={user.avatarURL} alt={user.name} />
					</div>
					<ul>
						<li className='option'>{a.text}</li>
						<li className='option'>{b.text}</li>
						<li className='option'>{c.text}</li>
						<li className='option'>{d.text}</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default connect((state) => ({
	polls: state.polls,
	users: state.users,
}))(PollView);
