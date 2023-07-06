/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

const initState = 0 //初始化状态
export default function countReducer(preState = initState, action) {
  // console.log(preState, action); // 初始化的时候preState的值是undefined action是 {type: @@REDUX/init_a.2.c.3}
  const { type, data } = action //从action对象中获取：type、data
  switch (type) { //根据type决定如何加工数据
    case 'increment':
      return preState + data
    case 'decrement':
     return preState - data
    default:
      return preState
  }
}