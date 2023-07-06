import React, { Component } from 'react'
import Count from './containers/Count'
// import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 通过provider来给容器组件传递store 不需要自己再手动传递 */}
        {/* <Count store={ store }/> */}
        <Count/>
      </div>
    )
  }
}
