import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
class Count extends Component {
  add = () => {
    this.props.createIncrementAction(1)
  }
  cut = () => {
    this.props.createDecrementAction(1)
  }
  addAsync = () => {
    this.props.createIncrementAsyncAction(1, 500)
  }
  render() {
    const { count, number } = this.props
    return (
      <div>
        <h1>当前组件为Count, Person组件的人数为：{ number }</h1>
        <h3>当前求和为：{ count } </h3>
        <button onClick={ this.add }>加一</button> &nbsp;
        <button onClick={ this.cut }>减一</button> &nbsp;
        <button onClick={ this.addAsync }>异步加一</button>
      </div>
    )
  }
}
export default connect(
  state => ({
    count: state.count,
    number: state.persons.length
  }),
  {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
  }
)(Count)