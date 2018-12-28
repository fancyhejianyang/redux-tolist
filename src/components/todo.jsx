import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo.css';
import { todoStore as store } from '../model/store/store';
import { completedTodo, deleteTodo, updateTodo } from '../model/actions/index';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentEditable: false
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(e) {
    store.dispatch(deleteTodo(this.props.todo.id));
  }
  componentWillMount() {
    console.error = (function () {
      var error = console.error

      return function (exception) {
        if ((exception + '').indexOf('Warning: A component is `contentEditable`') !== 0) {
          error.apply(console, arguments)
        }
      }
    })()
  }
  completeTodo(event) {
    // dispatch 要设置完成的id数据
    store.dispatch(completedTodo(this.props.todo.id));
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  toEdit(e) {
    this.setState({
      contentEditable: true
    });
  }
  enterEmmit(e) {
    let _this = this;
    if (e.keyCode === 13) {
      e.preventDefault();
      store.dispatch(updateTodo(_this.props.todo.id, e.target.innerHTML));
      return;
    }
  }
  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.completeTodo.bind(this, this.props.todo)} checked={this.props.todo.completed} />
        <p style={{
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }} contentEditable={this.state.contentEditable} onClick={this.toEdit.bind(this)} onKeyDown={this.enterEmmit.bind(this)}>{this.props.todo.payload}</p>
        <span onClick={this.remove}>-</span>
      </li>
    );
  }
}
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  // onClick: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  // payload: PropTypes.string.isRequired
};
export default Todo;