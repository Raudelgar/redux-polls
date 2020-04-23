import React from 'react';

import Users from './Users.js';

class Leaderboard extends React.Component {
	render() {
		const { users } = this.props;
		return (
			<div>
				<ul>
					<Users users={users} />
				</ul>
			</div>
		);
	}
}

export default Leaderboard;
