import React from 'react';
import { connect } from 'react-redux';

import './AddPoll.css';
import { handleSubmitPoll } from '../../../actions/polls/addPoll';

class AddPoll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			a: '',
			b: '',
			c: '',
			d: '',
		};
		this.resetRef = React.createRef(false);
		this.submitRef = React.createRef(false);
	}

	componentWillUnmount() {
		this.cleanUp();
	}

	handleInputForm = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		this.resetRef.current = true;
		this.setState({ [name]: value });
	};

	isSubmitBtnVisible = () => {
		const { question, a, b, c, d } = this.state;
		if (
			question.trim().length > 0 &&
			a.trim().length > 0 &&
			b.trim().length > 0 &&
			c.trim().length > 0 &&
			d.trim().length > 0
		) {
			this.submitRef.current = true;
			return true;
		}
		this.submitRef.current = false;
		return false;
	};

	handleSubmitForm = (e) => {
		e.preventDefault();
		this.props.history.push('/');
		this.props.dispatch(handleSubmitPoll(this.state));
	};

	reset = (e) => {
		e.preventDefault();
		this.cleanUp();
		this.resetRef.current = false;
	};

	cleanUp = () => {
		this.setState({
			question: '',
			a: '',
			b: '',
			c: '',
			d: '',
		});
	};
	render() {
		const { question, a, b, c, d } = this.state;
		this.isSubmitBtnVisible();
		return (
			<div>
				<form className='add-form' onSubmit={this.handleSubmitForm}>
					<label htmlFor='question'>What is your question?</label>
					<input
						type='text'
						id='question'
						name='question'
						value={question}
						onChange={this.handleInputForm}
					/>
					<h3>What are the options?</h3>
					<label htmlFor='optA'>A.</label>
					<input
						type='text'
						id='optA'
						name='a'
						value={a}
						onChange={this.handleInputForm}
					/>
					<label htmlFor='optB'>B.</label>
					<input
						type='text'
						id='optB'
						name='b'
						value={b}
						onChange={this.handleInputForm}
					/>
					<label htmlFor='optC'>C.</label>
					<input
						type='text'
						id='optC'
						name='c'
						value={c}
						onChange={this.handleInputForm}
					/>
					<label htmlFor='optD'>D.</label>
					<input
						type='text'
						id='optD'
						name='d'
						value={d}
						onChange={this.handleInputForm}
					/>
					<button
						disabled={this.submitRef.current ? false : 'disabled'}
						className='btn'
					>
						submit
					</button>
					<button
						disabled={this.resetRef.current ? false : 'disabled'}
						className='btn'
						onClick={this.reset}
					>
						reset
					</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddPoll);
