import React from 'react';
import style from './TodoList.css';

const Todo = props => (
  <div className={style.Task}>
    <div>{props.text}</div>
    <button className={style.removeBtn} onClick = {()=>props.remove(props.id)}>x</button>
  </div>)

export default Todo;
