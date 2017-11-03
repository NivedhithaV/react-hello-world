import React, { Component } from 'react';
import './add-greeter.css';

class AddGreeter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addGreeting = this.addGreeting.bind(this);
	}

	handleUpdate(event) {
		this.setState({
			name: event.target.value
		});
	}

	addGreeting() {
		this.props.addGreeting(this.state.name);
		this.setState({
			name: ''
		});
	}

	render() {
		return (
			<div className="add-greeter">
				<input type="text"
					   value={this.state.name}
					   onChange={this.handleUpdate}/>
				<button onClick={this.addGreeting}>Add</button>
			</div>
		)
	}
}

export default AddGreeter;