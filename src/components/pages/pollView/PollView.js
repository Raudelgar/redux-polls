import React from 'react';
import { connect } from 'react-redux';

import './PollView.css';

class PollView extends React.Component {
	chooseOpt = (e) => {
		const liEl = e.target.closest('li');
		const childs = Array.from(e.target.closest('ul').childNodes);
		const liClassNames = childs.map((child) => child.className);

		if (!liClassNames.includes('option choose')) {
			liEl.classList.add('choose');
		}
	};

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
					<ul onClick={this.chooseOpt}>
						<li className='option'>
							<div className='result'>
								<span>{a.text}</span>
								<span></span>
							</div>
						</li>
						<li className='option'>
							<div className='result'>
								<span>{b.text}</span>
								<span></span>
							</div>
						</li>
						<li className='option'>
							<div className='result'>
								<span>{c.text}</span>
								<span></span>
							</div>
						</li>
						<li className='option'>
							<div className='result'>
								<span>{d.text}</span>
								<span></span>
							</div>
						</li>
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
