import React from 'react';
import { connect } from 'react-redux';

import './AddPoll.css';
import {
	addQuestion,
	addOptA,
	addOptB,
	addOptC,
	addOptD,
	handleSubmitPoll,
	reset,
} from '../../../actions/polls/addPoll';

class AddPoll extends React.Component {
	addQuestion = (e) => {
		e.preventDefault();
		this.props.dispatch(addQuestion(this.question.value));
	};
	addOptionA = (e) => {
		e.preventDefault();
		this.props.dispatch(addOptA(this.optionA.value));
	};
	addOptionB = (e) => {
		e.preventDefault();
		this.props.dispatch(addOptB(this.optionB.value));
	};
	addOptionC = (e) => {
		e.preventDefault();
		this.props.dispatch(addOptC(this.optionC.value));
	};
	addOptionD = (e) => {
		e.preventDefault();
		this.props.dispatch(addOptD(this.optionD.value));
	};
	submit = (e) => {
		e.preventDefault();
		this.question.value = '';
		this.optionA.value = '';
		this.optionB.value = '';
		this.optionC.value = '';
		this.optionD.value = '';
		console.log(this.props.addPoll);
		this.props.dispatch(handleSubmitPoll(this.props.addPoll));
	};
	reset = (e) => {
		e.preventDefault();
		this.props.dispatch(reset());
	};
	render() {
		const { addPoll } = this.props;
		const { submit, reset } = addPoll;
		return (
			<div>
				<form className='add-form'>
					<label htmlFor='question'>What is your question?</label>
					<input
						type='text'
						id='question'
						ref={(input) => (this.question = input)}
						onChange={this.addQuestion}
					/>
					<h3>What are the options?</h3>
					<label htmlFor='optA'>A.</label>
					<input
						type='text'
						id='optA'
						ref={(input) => (this.optionA = input)}
						onChange={this.addOptionA}
					/>
					<label htmlFor='optB'>B.</label>
					<input
						type='text'
						id='optB'
						ref={(input) => (this.optionB = input)}
						onChange={this.addOptionB}
					/>
					<label htmlFor='optC'>C.</label>
					<input
						type='text'
						id='optC'
						ref={(input) => (this.optionC = input)}
						onChange={this.addOptionC}
					/>
					<label htmlFor='optD'>D.</label>
					<input
						type='text'
						id='optD'
						ref={(input) => (this.optionD = input)}
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
