/**
 * 此文件为CountUI组件的容器组件
 */

//引入Count的UI组件
import CountUI from "../../components/Count";
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action_create'
//引入connect用于连接UI组件与redux
import { connect } from "react-redux";

// // 映射状态
// const mapStateToProps = (state) =>  ({ count: state })
// // 映射操作状态的方法
// const mapDispatchToProps = (dispatch) => (
//   {
//     add: value => { dispatch(createIncrementAction(value)) },
//     cut: value => { dispatch(createDecrementAction(value)) },
//     addAsync: (value, time) => { dispatch(createIncrementAsyncAction(value, time)) },
//    }
// )
// //使用connect()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)


//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  (state) =>  ({ count: state }),

  // mapDispatchToProps的简写
  {
    add: createIncrementAction,
    cut: createDecrementAction,
    addAsync: createIncrementAsyncAction,
  }

  // mapDispatchToProps的一般写法
  // (dispatch) => (
  //   {
  //     add: value => { dispatch(createIncrementAction(value)) },
  //     cut: value => { dispatch(createDecrementAction(value)) },
  //     addAsync: (value, time) => { dispatch(createIncrementAsyncAction(value, time)) },
  //    }
  // )
  )(CountUI)