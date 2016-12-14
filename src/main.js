import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component {
	constructor() {
		super();
		this.state = { 
			number:0 
		};
	}
	btnClick = () => {
		let newState = {
			number: this.state.number + 1
		};
		this.setState(newState);
	};
	render() {
		return (
			<div>
				<Show number={this.state.number} />
				<Btn handleClick={this.btnClick} />
			</div>
		);
	}
}

class Btn extends React.Component {
	render() {
		return (
			<button onClick={this.props.handleClick}> Click Me </button>
		);
	}
}

class Show extends React.Component {
	render() {
		return (
			<div>{this.props.number}</div>
		);
	}
}



ReactDOM.render(<Panel />, document.getElementById('app'));
