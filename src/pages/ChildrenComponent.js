import { Component } from "react";

export default class ChildrenComponent extends Component{
  render () {
    return this.props.children(1)
  }
}
