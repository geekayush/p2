import React, {Component} from 'react';
import './Main.css';

export default class Main extends Component{
	changeName(e){
		this.props.change(e.target.value)
	}
	render(){
		return (
			<div className="main">
			<h1>Hi! {this.props.name}</h1>
			<input type="text" onChange={this.changeName.bind(this)} placeholder="Enter any name..."/>
			</div>
			);
	}
}