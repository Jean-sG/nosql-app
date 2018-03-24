import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form1 extends React.Component {
constructor(props) {
    super(props);
     
    this.state = {value : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
         <input id="search" class="search-box" type="text" placeholder="Search a movie" value={this.state.value.test} onChange={this.handleChange} />
       
        </label>
        <input type="submit" value="SEARCH" class="search-label" for="search" />
      </form>
    );
  }
}

export default Form1;