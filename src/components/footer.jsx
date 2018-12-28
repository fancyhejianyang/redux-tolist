import React, { Component } from 'react';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }
  render() {
    return (
      <div className="footer">
        Copyright © 2018 todolist.cn
      </div>
    );
  }
}
export default Footer;