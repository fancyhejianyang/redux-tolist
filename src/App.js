import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import AddTodo from './container/AddTodo';
import VisibleTodoList from './container/VisibleTodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {

  }
  onToClick() {

  }
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
