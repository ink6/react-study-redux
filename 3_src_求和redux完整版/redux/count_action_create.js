/* 
	该文件专门为Count组件生成action对象
*/
import { DECREMENT, INCREMENT } from './constant'

// const createIncrementAction = data => {
//   return { type: 'increment', data }
// }
// 简写
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })