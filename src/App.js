import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import { Button, Glyphicon } from 'react-bootstrap';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      id: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleClick() {
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => this.setState({
        id: response.data.id
      }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));

    document.querySelector('body').classList.toggle('change');
  }

  render() {
    return (
      <div className='button_container'>
        <button className='button' onClick={this.handleClick} >push me</button>
        <p className='paragraph'>{this.state.id}</p>

        <button className='button' onClick={this.handleBtnClick} >Button2</button>
        <p className='paragraph'>Counter: {this.state.counter}</p>
      </div>
    )
  }
}