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
