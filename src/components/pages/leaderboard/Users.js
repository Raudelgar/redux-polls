import React from 'react';

import './User.css';

export default function Users({ users }) {
	return (
		<>
			{users.map(({ id, avatar, name, polls, answers }) => (
				<li key={id} className='user'>
					<img src={avatar} alt={name} />
					<div>
						<h1>{name}</h1>
						<p>{polls} Polls</p>
						<p>{answers} Answers</p>
					</div>
				</li>
			))}
		</>
	);
}
