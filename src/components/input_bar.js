import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = { inputterm: '' };
  }

  // eslint-disable-next-line class-methods-use-this
  onInputChange = (event) => {
    this.setState({ inputterm: event.target.value });
    // this.props.onSearchChange(event.target.value);
  }

  onSubmit = (event) => {
    this.props.onSubmit(event.target.value);
    this.setState({ inputterm: '' });
  }

  render() {
    return (
      <div id="input-bar">
        <input id="input-text" type="text" onChange={this.onInputChange} value={this.state.inputterm} placeholder="Type New Note Title" />
        <button id="submit-button" type="submit" onClick={this.onSubmit} value={this.state.inputterm}> create note </button>
      </div>
    );
  }
}

export default InputBar;
