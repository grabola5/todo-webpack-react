import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js'

const TodoList = props => (
  <div className={style.List}>
   {props.data.map(todo => (
     <Todo key={todo.id} text={todo.text} id={todo.id} remove={props.remove}/>))}
  </div>)

export default TodoList;
