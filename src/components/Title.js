import React from 'react';
import style from './TodoList.css';

const Title = props => (
  <div>
    <h1 className={style.Title}>{props.title}</h1>
    <p className={style.TaskNumber}>Number of tasks: {props.length}</p>
  </div>)

export default Title;
