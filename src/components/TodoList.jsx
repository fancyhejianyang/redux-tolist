import React, { Component } from 'react';
import './todolist.css';
import PropTypes from 'prop-types';
import Todo from './todo';
import { todoStore as store } from '../model/store/store';
// import {todoStore as store} from '../model/store/store';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleTodos = this.handleTodos.bind(this);
    this.pending =[];
    this.completed = [];
  };
  componentWillMount() {
    var todos = store.getState().todos;
    this.setState({
      todos: todos,
      pending: [],
      completed: []
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    // console.log(nextProps);
    this.handleTodos();
    return true;
  }
  componentDidMount() {
    this.handleTodos();
  }
  // onTodoClick(todo) {
  //   console.log(todo.id);
  // };
  handleTodos() {
    var todos = store.getState().todos;
    var pending = [];
    var completed = [];
    todos.forEach(todo => {
      if (todo.completed === false) {
        pending.push(todo);
      } else {
        completed.push(todo);
      }
    });
    this.pending = pending;
    this.completed = completed;
  }
  render() {
    let onTodoClick = this.onTodoClick;
    return (
      <div className="container">
        <div className="pending">
          正在进行
          <span>{this.pending.length}</span>
        </div>
        <div className="todo-list">
          <ul>
            {this.pending.map(todo => (
              <Todo key={todo.id} todo={todo} onClick={onTodoClick.bind(todo)} />
            ))}
          </ul>
        </div>
        <div className="pending completed">
          已完成
          <span>{this.completed.length}</span>
        </div>
        <div className="todo-list completed">
          <ul>
            {this.completed.map(todo => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      payload: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  // onTodoClick: PropTypes.func.isRequired
}
export default TodoList;