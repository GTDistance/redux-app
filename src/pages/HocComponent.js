import React, { Component } from "react";

function HocComponent (WrappedComponent) {
  return class extends Component {
    render () {
      return (
        <WrappedComponent/>
      )
    }
  }
}

class Visible extends Component {
  render () {
    return null
  }
}

export default HocComponent(Visible)
