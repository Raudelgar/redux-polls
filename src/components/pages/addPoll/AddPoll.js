import React from 'react';
import { connect } from 'react-redux';

import './AddPoll.css';
import {
	addQuestion,
	addOptA,
	addOptB,
	addOptC,
	addOptD,
	submit,
	reset,
} from '../../../actions/polls/addPoll';

class AddPoll extends React.Component {
	addQuestion = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		this.props.dispatch(addQuestion(e.target.value));
	};
	addOptionA = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		this.props.dispatch(addOptA(e.target.value));
	};
	addOptionB = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		this.props.dispatch(addOptB(e.target.value));
	};
	addOptionC = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		this.props.dispatch(addOptC(e.target.value));
	};
	addOptionD = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		this.props.dispatch(addOptD(e.target.value));
	};
	submit = (e) => {
		e.preventDefault();
		console.log('submit');
		this.props.dispatch(submit());
		this.props.dispatch(reset());
	};
	reset = (e) => {
		e.preventDefault();
		console.log('reset');
		this.props.dispatch(reset());
	};
	render() {
		const { addPoll } = this.props;
		const { submit, reset, question, optA, optB, optC, optD } = addPoll;
		return (
			<div>
				<form className='add-form'>
					<label htmlFor='question'>What is your question?</label>
					<input
						type='text'
						id='question'
						// ref={(input) => (this.question = input)}
						value={!question ? '' : question}
						onChange={this.addQuestion}
					/>
					<h3>What are the options?</h3>
					<label htmlFor='optA'>A.</label>
					<input
						type='text'
						id='optA'
						// ref={(input) => (this.optionA = input)}
						value={!optA ? '' : optA}
						onChange={this.addOptionA}
					/>
					<label htmlFor='optB'>B.</label>
					<input
						type='text'
						id='optB'
						// ref={(input) => (this.optionB = input)}
						value={!optB ? '' : optB}
						onChange={this.addOptionB}
					/>
					<label htmlFor='optC'>C.</label>
					<input
						type='text'
						id='optC'
						// ref={(input) => (this.optionC = input)}
						value={!optC ? '' : optC}
						onChange={this.addOptionC}
					/>
					<label htmlFor='optD'>D.</label>
					<input
						type='text'
						id='optD'
						// ref={(input) => (this.optionD = input)}
						value={!optD ? '' : optD}
						onChange={this.addOptionD}
					/>
					<button
						disabled={submit ? 'disabled' : false}
						className='btn'
						onClick={this.submit}
					>
						submit
					</button>
					<button
						disabled={reset ? 'disabled' : false}
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
