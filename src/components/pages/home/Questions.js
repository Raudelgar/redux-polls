import React from 'react';
import { Link } from 'react-router-dom';

export default function Questions({ list }) {
	return (
		<>
			{list.map((q) => (
				<li key={q.id}>
					<Link to={`/polls/${q.id}`}>{q.question}</Link>
				</li>
			))}
		</>
	);
}
