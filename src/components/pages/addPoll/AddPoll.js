import React from 'react';
import { connect } from 'react-redux';

import './AddPoll.css';
import {
	handleSubmitPoll,
	handlePollForm,
	reset,
} from '../../../actions/polls/addPoll';

class AddPoll extends React.Component {
	componentWillUnmount() {
		this.cleanUp();
	}

	handleInputForm = (e) => {
		e.preventDefault();
		this.newPoll = {
			question: this.question.value,
			a: this.optionA.value,
			b: this.optionB.value,
			c: this.optionC.value,
			d: this.optionD.value,
		};

		this.props.dispatch(handlePollForm(this.newPoll));
	};

	submit = (e) => {
		e.preventDefault();
		this.props.dispatch(handleSubmitPoll(this.newPoll));
		this.cleanUp();
	};
	reset = (e) => {
		e.preventDefault();
		this.cleanUp();
		this.props.dispatch(reset());
	};

	cleanUp = (submit) => {
		this.question.value = '';
		this.optionA.value = '';
		this.optionB.value = '';
		this.optionC.value = '';
		this.optionD.value = '';
		this.newPoll = {
			question: this.question.value,
			a: this.optionA.value,
			b: this.optionB.value,
			c: this.optionC.value,
			d: this.optionD.value,
		};
	};
	render() {
		const { addPoll } = this.props;
		const { submit, reset } = addPoll;
		console.log(this.newPoll);
		return (
			<div>
				<form className='add-form'>
					<label htmlFor='question'>What is your question?</label>
					<input
						type='text'
						id='question'
						ref={(input) => (this.question = input)}
						onChange={this.handleInputForm}
					/>
					<h3>What are the options?</h3>
					<label htmlFor='optA'>A.</label>
					<input
						type='text'
						id='optA'
						ref={(input) => (this.optionA = input)}
						onChange={this.handleInputForm}
					/>
					<label htmlFor='optB'>B.</label>
					<input
						type='text'
						id='optB'
						ref={(input) => (this.optionB = input)}
						onChange={this.handleInputForm}
					/>
					<label htmlFor='optC'>C.</label>
					<input
						type='text'
						id='optC'
						ref={(input) => (this.optionC = input)}
						onChange={this.handleInputForm}
					/>
					<label htmlFor='optD'>D.</label>
					<input
						type='text'
						id='optD'
						ref={(input) => (this.optionD = input)}
						onChange={this.handleInputForm}
					/>
					<button
						disabled={submit ? false : 'disabled'}
						className='btn'
						onClick={this.submit}
					>
						submit
					</button>
					<button
						disabled={reset ? false : 'disabled'}
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

export default connect((state) => ({
	addPoll: state.addPoll,
}))(AddPoll);
