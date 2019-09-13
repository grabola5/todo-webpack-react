import React from 'react';
import style from './TodoList.css';

const Todo = props => <div className={style.Task}>{props.text}</div>

export default Todo;
