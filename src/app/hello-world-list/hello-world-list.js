import React, { Component } from 'react';
import './hello-world-list.css';
import HelloWorld from '../hello-world/hello-world';
import AddGreeter from '../add-greeter/add-greeter';

class HelloWorldList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			greetings: ['World', 'User', 'Username']
		};
		this.renderGreetings = this.renderGreetings.bind(this);
		this.addGreeting = this.addGreeting.bind(this);
		this.removeGreeting = this.removeGreeting.bind(this);
	}

	renderGreetings() {
		return this.state.greetings.map(name => (
			<HelloWorld key={name}
						name={name}
						removeGreeting={this.removeGreeting}/>
		));
	}

	addGreeting(newName) {
		this.setState({
			greetings: [...this.state.greetings, newName]
		})
	}

	removeGreeting(removeName) {
		const filteredNames = this.state.greetings.filter(name => {
			return name !== removeName;
		});
		this.setState({
			greetings: filteredNames
		});
	}

	render() {
		return (
			<div className='hello-world-list'>
				<AddGreeter addGreeting={this.addGreeting}/>
				{this.renderGreetings()}
			</div>
		);
	}
}

export default HelloWorldList;
