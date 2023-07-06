import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {
      id: nanoid(),
      name,
      age
    }
    this.props.addPerson(personObj)
  }
  render() {
    return (
      <div>
        <h1>当前组件为Person, Count组件的count为: { this.props.count }</h1>
        <div>
          <input ref={ node => this.nameNode = node } type="text" placeholder='请输入姓名' /> &nbsp;
          <input ref={ node => this.ageNode = node } type="text" placeholder='请输入年龄' /> &nbsp;
          <button onClick={ this.addPerson }>添加</button>
        </div>
        <ul>
          { 
            this.props.persons.map(p => {
              return <li key={ p.id }> { p.name } -- { p.age }</li>
            })
          }
        </ul>
      </div>
    )
  }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({ // 映射状态
    persons: state.persons,
    count: state.count
  }),
  { // 映射操作状态的方法
    addPerson
  }
)(Person)