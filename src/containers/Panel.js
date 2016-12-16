	import React from 'react';
	//import ReactDOM from 'react-dom';
	import { bindActionCreators } from 'redux';
	import { connect } from 'react-redux';

	// import components
	import Btn from '../components/Btn.js';
	import Show from '../components/Show.js';

	// import action
	import * as counterAction from '../actions/counterAction';

	class Panel extends React.Component {
	  constructor(props){
	    super(props);
	  }

	  render(){
	    const {counterReducer, counterAction} = this.props;

	    return (
	      <div>
	        <Show number={counterReducer} />
	        <Btn increment={counterAction.incrementAction} decrement={counterAction.decrementAction} />
	      </div>
	    );
	  }
	}

	const mapStateToProps = (state) => {
	  return {
	    counterReducer: state.counterReducer
	  }
	}

	const mapDispatchToProps = (dispatch) => {
	  return {
	    counterAction: bindActionCreators(counterAction, dispatch)
	  }
	}



	export default connect(mapStateToProps, mapDispatchToProps)(Panel);
