import React, {Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.stat = {
			hasError: false
		}
	}

	componentDidCatch(error, info){
		this.setState({hasError:true})
	}

	render(){
		if (this.stat.hasError){
			return <h1>Oooop. That is not good </h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;