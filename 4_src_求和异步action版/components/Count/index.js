import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action_create'
export default class Count extends Component {
  // 在组件中解决 store改变 但是dom不刷新的方法 在入口index.js文件里也可以写一个统一的处理
  // componentDidMount() {
  //   //监测到redux中的数据一变化 就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  state = { count: 0 }
  // 加
  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value * 1))
  }
  // 减
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  // 求和为奇数加
  incrementOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 === 0) return
    store.dispatch(createIncrementAction(value * 1))
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(value * 1))
    // }, 1000)
      store.dispatch(createIncrementAsyncAction(value * 1, 500))
  }
  render() {
    return (
      <div>
        <h2>当前求和为： { store.getState() }</h2>
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
