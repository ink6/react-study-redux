import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
// import store from './redux/store'
// store.subscribe(() => { //redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。
//   ReactDOM.render(<App/>, document.getElementById('root'))
// }) // react-redux 内部做了监听变化渲染页面的处理 不需要再手动监听
ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
)