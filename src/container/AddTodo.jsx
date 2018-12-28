import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddTodo.css';
import { addTodo } from '../model/actions/index';
// import { todoStore as store } from '../model/store/store';
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'First React App',
      text: ''
    };
    this.handleValue = this.handleValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentWillMount() {

  }
  
  addTodo(e) {
    let _this = this;
    if (e.keyCode === 13) {
      // console.log(store.getState());
      _this.props.dispatch(addTodo(_this.state.text));
      _this.setState({
        text: ''
      })
    };
  }
  handleValue(e) {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    return (
      <div className="app-header">
        <label>ToDoList</label>
        <input type="text" placeholder="添加ToDo" onKeyDown={this.addTodo} value={this.state.text} onChange={this.handleValue.bind(this)} />
      </div>
    );
  }
}
AddTodo = connect()(AddTodo);
export default AddTodo;