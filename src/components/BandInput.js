import React, { Component } from 'react';

class BandInput extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name</label>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          bands component
          <input type='submit'  />
        </form>
      </div>
    );
  }
};

export default BandInput;
