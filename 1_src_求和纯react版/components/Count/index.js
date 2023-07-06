import React, { Component } from 'react'

export default class Count extends Component {
  state = { count: 0 }
  // 加
  increment = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    this.setState({
      count: count + value*1
    })
  }
  // 减
  decrement = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    this.setState({
      count: count - value*1
    })
  }
  // 求和为奇数加
  incrementOdd = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    if (count % 2 === 0) return
    this.setState({
      count: count + value*1
    })
  }
  // 异步加
  incrementAsync = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    setTimeout(() => {
      this.setState({
        count: count + value*1
      })
    }, 1000)
  }
  render() {
    return (
      <div>
        <h2>当前求和为： { this. state.count }</h2>
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
