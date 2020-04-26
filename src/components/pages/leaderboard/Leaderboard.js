import React from 'react';
import { connect } from 'react-redux';

import Users from './Users.js';

class Leaderboard extends React.Component {
	render() {
		const { users } = this.props;
		return (
			<div>
				<ul>
					{users.map((user) => (
						<Users key={user.id} user={user} />
					))}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		users: Object.keys(users)
			.map((id) => users[id])
			.sort(
				(a, b) =>
					b.answers.length +
					b.polls.length -
					(a.answers.length + a.polls.length)
			),
	};
}
export default connect(mapStateToProps)(Leaderboard);
