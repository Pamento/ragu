import React, { Component } from 'react';
import './Button';

class ButtonBTN extends Component {
  render() {
    return (
      <button className="btnComp" onClick={this.props.onClick}>{this.props.label}</button>
    );
  }
}

export default ButtonBTN;
