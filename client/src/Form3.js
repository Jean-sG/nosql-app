import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

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
        
<div class="form-group">
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
    );
  }
}

export default Form3;