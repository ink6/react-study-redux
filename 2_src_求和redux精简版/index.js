import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
store.subscribe(() => { // redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。
  ReactDOM.render(<App/>, document.getElementById('root'))
})
ReactDOM.render(<App/>, document.getElementById('root'))