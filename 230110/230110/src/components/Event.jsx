import React, { Component } from 'react';

export default class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: 'hello world',
    };
  }
  render() {
    const { handle } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ handle: 'goodbyeeee' })}>
        변경
        </button>
        <br />
        <span>{handle}</span>
      </div>
    );
  }
}
