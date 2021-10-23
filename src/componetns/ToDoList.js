import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeTodo,doneTodo } from "../store/actions/todo";

class ToDoList extends Component {

  
  
  render() {
    const { toDoList } = this.props;
   


    return (
      <div>
        <ul>
          {toDoList.map(list => (
            <li  style={{listStyle:"none",display:"flex",justifyContent:"space-around",width:200}} key={list.id}>
              <span style={{textDecoration:list.done?"line-through":null}} >{list.description}</span> <span>{list.done? new Date().getTime()-list.id:""}</span>
              <button onClick={() => this.props.removeTodo(list.id)}>x</button>
              <button onClick={() => this.props.doneTodo(list.id)}>done</button>
              
            </li>
          ))}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  toDoList: state.todo.toDoList
})

const mapDispatchToProps = {
 removeTodo,
  doneTodo
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)

export default Container;
