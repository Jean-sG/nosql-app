import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText,Col }  from 'reactstrap';

class Form2 extends React.Component {
  constructor(props) {
    super(props);
      
    this.state = {value: {name: '', director:'', genre:'', year:''}};
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
      <div class="form-group col-md-4">
				<label for="inputName">Movie Name </label>
				 <input class="name" type="text" placeholder="" value={this.state.value.name} one={this.handleChange} />
      </div>
			
			<div class="form-group col-md-4">
				<label for="inputDirector"> Director </label>
				 <input class="name" type="text" placeholder="" value={this.state.value.director} onChange={this.handleChange} />
			</div>
			
			<div class="form-group col-md-4">
				<label for="inputGender">Genre</label>
				 <input class="name" type="text" placeholder="" value={this.state.value.genre} />
			</div>
        
        <div class="form-group col-md-4">
				<label for="year">Year</label>
				<input class="name" type="number" value={this.state.value.year} />
         </div>
         <input type="submit" value="SEARCH" class="search-label" for="search" />
        </form>
    );
  }
}

export default Form2;
