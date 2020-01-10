import { Component } from "react";

export default class VisibleComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: props.visible || false,
      message: 'message'
    }
  }

  static getDerivedStateFromProps (props, state) {
    console.info(props, state)
    const { visible } = props
    const visibleValue = !!visible
    if (visibleValue !== state.visible) {
      return {
        visible: visibleValue
      }
    }
    return null
  }

  render () {
    return this.state.visible && this.props.children
  }

}
