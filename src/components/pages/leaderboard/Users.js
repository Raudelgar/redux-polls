import React from 'react';

import './User.css';

export default function Users({ users }) {
	const ids = Object.keys(users);
	return (
		<>
			{ids.map((id) => (
				<li key={id} className='user'>
					<img src={users[id].avatarURL} alt={users[id].name} />
					<div>
						<h1>{users[id].name}</h1>
						<p>{users[id].polls.length} Polls</p>
						<p>{Object.keys(users[id].answers).length} Answers</p>
					</div>
				</li>
			))}
		</>
	);
}
