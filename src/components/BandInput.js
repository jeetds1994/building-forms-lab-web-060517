import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
    this.setState({band: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Band Name </label>
          <input type="text" value={this.state.band} onChange={this.handleChange}/>
          <button type="submit" ></button>
        </form>
      </div>
    );
  }
};

export default BandInput;
