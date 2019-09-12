import React from 'react';
import Todo from './Todo.js'

const TodoList = props => (
  <div>
   {props.data.map(todo => (<Todo key={todo.id} text={todo.text} id={todo.id}/>))}
  </div>)

export default TodoList;
