	import React from 'react';
	import ReactDOM from 'react-dom';
	import Btn from '../components/Btn.js';
	import Show from '../components/Show.js';

	class Panel extends React.Component {
	    constructor() {
	        super();
	        this.state = {
	            number: 0
	        };
	    }
	    btnClick = () => {
	        let newState = {
	            number: this.state.number + 1
	        };
	        this.setState(newState);
	    };
	    render() {
	        return ( < div >
	            < Show number = { this.state.number }
	            /> < Btn handleClick = { this.btnClick }
	            /> < /div>
	        );
	    }
	}


	ReactDOM.render( < Panel / > , document.getElementById('app'));


	export default Panel;
