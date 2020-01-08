import React, { Component } from "react";
import { connect } from "react-redux";
import addAction from "./actions/countAction";
import postList from "./post";
import postAction, { postAsync } from "./actions/postAction";
import promiseAction ,{ createPromiseAction } from "./actions/promiseActions";

class PostComponent extends Component {
  constructor (props) {
    super(props)
    console.info(props)
  }

  componentDidMount () {

  }

  addCounter = () => {
    this.props.addDispatch()
  }
  postList = () => {
    this.props.postList()
  }
  promisePostList = () => {
    this.props.promisePostList()
  }

  render () {
    console.info(this.props)
    return (
      <div>
        <span>{this.props.addCount.count}</span>
        <button onClick={this.addCounter}>增加1</button>
        <button onClick={this.postList}>postList</button>
        <button onClick={this.promisePostList}>promisePostList</button>
        <ul>
          {this.props.post.postList.map((item) => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.info('mapStateToProps', state)
  return {
    post: state.postReducer,
    addCount: state.counterReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addDispatch: () => {
      dispatch(addAction)
    },
    postList: () => {
      dispatch(postAsync())
    },
    promisePostList: () => {
      dispatch(promiseAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)
