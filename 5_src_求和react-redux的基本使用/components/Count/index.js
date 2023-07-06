import React, { Component } from 'react'
export default class Count extends Component {
  state = { count: 0 }
  // 加
  increment = () => {
    const { value } = this.selectNumber
    this.props.add(value * 1)
  }
  // 减
  decrement = () => {
    const { value } = this.selectNumber
    this.props.cut(value * 1)
  }
  // 求和为奇数加
  incrementOdd = () => {
    const { value } = this.selectNumber
    const count = this.props.count
    if (count % 2 === 0) return
    this.props.add(value * 1)
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.addAsync(value * 1, 1000)
  }
  render() {
    // console.log(this.props);
    const { count } = this.props
    return (
      <div>
        <h2>当前求和为： { count } </h2>
        <select ref={ node => this.selectNumber = node }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={ this.increment }>加</button>&nbsp;
        <button onClick={ this.decrement }>减</button>&nbsp;
        <button onClick={ this.incrementOdd }>奇数加</button>&nbsp;
        <button onClick={ this.incrementAsync }>异步加</button>
      </div>
    )
  }
}
