import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
import { increment, decrement, incrementAsync } from '../../redux/actions/count'
class Count extends Component {
  add = () => {
    this.props.increment(1)
  }
  cut = () => {
    this.props.decrement(1)
  }
  addAsync = () => {
    this.props.incrementAsync(1, 500)
  }
  render() {
    const { count, countLength } = this.props
    return (
      <div>
        <h1>当前组件为Count, Person组件的人数为：{ countLength }</h1>
        <h3>当前求和为：{ count } </h3>
        <button onClick={ this.add }>加一</button> &nbsp;
        <button onClick={ this.cut }>减一</button> &nbsp;
        <button onClick={ this.addAsync }>异步加一</button>
      </div>
    )
  }
}
//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({
    count: state.count,
    countLength: state.persons.length
  }),
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)