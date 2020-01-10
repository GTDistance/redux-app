import React, { Component } from "react";
import VisibleComponent from "./VisibleComponent";

export default class TestVisible extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.showOrNot}>显示或者隐藏</button>
        <VisibleComponent visible={this.state.visible}>
          <h1>我就是我，不一样的我</h1>
        </VisibleComponent>
      </div>
    )
  }

  showOrNot = () => {
    this.setState({ visible: !this.state.visible })
  }
}
