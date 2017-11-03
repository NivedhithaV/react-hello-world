import React, { Component } from 'react';
import './hello-world.css';

class HelloWorld extends Component {

	constructor(props) {
		super(props);
		this.state = {
			greeting: 'Hello'
		};
		// this.frenchify = this.frenchify.bind(this);
		this.removeGreeting = this.removeGreeting.bind(this);
	}

	frenchify = () => {
		this.setState({
			greeting: 'Bonjour'
		});
	};

	removeGreeting() {
		this.props.removeGreeting(this.props.name)
	}

	render() {
		return (
			<div className="hello-world">
				<div>{this.state.greeting} {this.props.name}!</div>
				<button onClick={this.frenchify}>Frenchify</button>
				<button onClick={this.removeGreeting}>Remove</button>
			</div>
		);
	}
}

export default HelloWorld;