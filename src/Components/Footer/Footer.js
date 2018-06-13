import React, {Component} from 'react';
import './Footer.css';
import Copyright from './Copyright/Copyright';

export default class Footer extends Component{
	render(){
		return (
			<div className="footer">
				<Copyright/>
			</div>
		);
	}
}