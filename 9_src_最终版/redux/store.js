/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象 applyMiddleware是store用于处理异步的中间件
// import { createStore } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
//引入redux-devtools-extension 为了方便使用浏览器redux工具
import { composeWithDevTools } from 'redux-devtools-extension'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入汇总之后的reducer
import reducer from "./reducers";

//暴露store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))