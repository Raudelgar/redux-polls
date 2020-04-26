import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { handleInitialData } from '../../actions/rootActions.js';
import LoadingBar from 'react-redux-loading-bar';
import Nav from '../nav/Nav.js';
import Home from '../pages/home/Home.js';
import Leaderboard from '../pages/leaderboard/Leaderboard.js';
import AddPoll from '../pages/addPoll/AddPoll.js';
import PollView from '../pages/pollView/PollView.js';

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { loading } = this.props;
		return (
			<Router>
				<div className='container'>
					<Nav />
					<LoadingBar style={{ position: 'absolute', top: '0', left: '0' }} />
					{!loading && (
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/leaderboard' component={Leaderboard} />
							<Route path='/add' component={AddPoll} />
							<Route path='/polls/:id' component={PollView} />
							<Route
								render={() => (
									<div style={{ textAlign: 'center' }}>
										<h2>404 - Page Not Found</h2>
									</div>
								)}
							/>
						</Switch>
					)}
				</div>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	return {
		loading: !authedUser,
		users,
	};
}

export default connect(mapStateToProps)(App);
