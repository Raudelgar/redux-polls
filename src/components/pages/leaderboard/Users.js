import React from 'react';

import './User.css';

export default function Users({ user }) {
	const { avatarURL, name, polls, answers } = user;
	return (
		<li className='user'>
			<img src={avatarURL} alt={name} />
			<div>
				<h1>{name}</h1>
				<p>{polls.length} Polls</p>
				<p>{answers.length} Answers</p>
			</div>
		</li>
	);
}
