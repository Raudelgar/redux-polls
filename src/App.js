import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { handleInitialData } from './actions/rootActions.js';
import Nav from './components/nav/Nav.js';
import Home from './components/pages/home/Home.js';
import Leaderboard from './components/pages/leaderboard/Leaderboard.js';
import AddPoll from './components/pages/addPoll/AddPoll.js';
import PollView from './components/pages/pollView/PollView.js';

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
					{loading && <h3 style={{ textAlign: 'center' }}>Loading...</h3>}
					{!loading && (
						<Switch>
							<Route exact path='/' component={Home} />
							<Route
								path='/leaderboard'
								render={(routes) => <Leaderboard {...this.props} />}
							/>
							<Route path='/add' component={AddPoll} />
							<Route path='/polls/:id' component={PollView} />
						</Switch>
					)}
				</div>
			</Router>
		);
	}
}

export default connect((state) => ({
	loading: state.loading,
	users: state.users,
}))(App);
