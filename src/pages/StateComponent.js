import React, { Component } from "react";

export default class StateComponent extends Component {

  constructor (props) {
    super(props);
    console.info('StateComponent', 'constructor')
    this.state = {
      count: 1
    }
  }

  static getDerivedStateFromProps (props) {
    console.info('StateComponent', 'getDerivedStateFromProps')
    const { count } = props
    if (count) {
      return { count }
    }
    return null
  }

  render () {
    const { count } = this.state
    return (
      <div>
        <span>{count}</span>
        <button onClick={this.updateState}>点我啊改变state</button>
        <button onClick={this.promiseUpdateState}>promise点击改变state</button>
      </div>
    )
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.info('StateComponent', 'getSnapshotBeforeUpdate')
    return {
      count: 10
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.info('StateComponent', 'componentDidUpdate', snapshot, this.state.count)
  }

  updateState = () => {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    console.info('StateComponent', 'updateState', this.state.count)
  }
  promiseUpdateState = () => {
    Promise.resolve().then(() => {
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      console.info('StateComponent', 'promiseUpdateState', this.state.count)
    })

  }
}
