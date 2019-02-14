import React, { Component } from 'react';
import './ChoiceItem.css';

export default class ChoiceItem extends Component {
  render() {
    return ( 
      <div className="boxItem">
        <p className="choiceItem" onClick={this.props.onClick}>{this.props.label}</p>
      </div>
    );
  }
}
