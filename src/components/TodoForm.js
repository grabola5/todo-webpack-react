import React from 'react';
import style from './TodoList.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
    handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }

    handleClick(e) {
      e.preventDefault();
      this.props.addTodo(this.state.value);
      this.setState({
        value: ''
      });
    }

    render() {
      return (
        <form>
          <input
            className={style.Input}
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            placeholder='write your task'/>
          <button className={style.addBtn}
          onClick={this.handleClick.bind(this)}>Add</button>
        </form>
      );
    }
}

export default TodoForm;
