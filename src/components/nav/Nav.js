import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
	return (
		<nav className='nav'>
			<ul>
				<li>
					<NavLink exact to='/' className='link' activeClassName='active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/leaderboard' className='link' activeClassName='active'>
						Leaderboard
					</NavLink>
				</li>
				<li>
					<NavLink to='/add' className='link' activeClassName='active'>
						Add Poll
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
