import React, { Component } from "react";

export default class RenderPropsComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      on: props.initialState || false,
    };
  }

  toggle () {
    this.setState({
      on: !this.state.on,
    });
  }

  render () {
    return (
      <div>{this.props.children({
        on: this.state.on,
        toggle: this.toggle,
      })}</div>
    );
  }
}
