import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import { Button, Glyphicon } from 'react-bootstrap';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      id: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => this.setState({
        id: response.data.id
      }))
  }

  render() {
    return (
      <div className='button_container'>
        <button className='button' onClick={this.handleClick} >push me</button>
        <p className='paragraph'>{this.state.id}</p>
      </div>
    )
  }
}