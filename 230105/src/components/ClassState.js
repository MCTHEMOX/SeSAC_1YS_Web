//rcc 로 자동완성
import React, { Component } from 'react';

export default class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: '현목',
    };
  }
  render() {
    const { teacher } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'mok' })}>
          영어로
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}
