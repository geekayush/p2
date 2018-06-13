import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

export default class App extends Component {
  state={
    name:'Ayush'
  }
  updateName(x){
    this.setState({name:x});
  }
  render() {
        return (
          <div>
            <Header/>
            <Main name={this.state.name} change={this.updateName.bind(this)}/>
            <Footer/>
          </div>
          );
  }
}