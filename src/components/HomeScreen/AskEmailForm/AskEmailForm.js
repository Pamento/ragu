import React, { Component } from 'react';
import './AskEmailForm.css';
import Button from '../../Button/Button';

class AskEmailForm extends Component {

  constructor(props){
    super(props);
    this.state = {
        inputValue : ""
    };
  }

  updateMailInput = (e) => {
      this.setState({
         inputValue: e.target.value
      });
  };

  submitForm = () => {
      this.props.actions.updateMailAndScreen(this.state.inputValue, 1);
  };

  takeFormValue(e){
    e.preventDefault();
    
  }
  render() {
    return (
      <form className="AskEmailForm" onSubmit={this.takeFormValue}>
        <input className="emailInput"
        type="email"
        id="askEmail"
        placeholder="entry your email adress here"
        name="mailUsers"
        value={this.state.inputValue}
        onChange={this.updateMailInput}
        />
        <Button onClick={this.submitForm} label='valider' />
      </form>
    );
  }
}

export default AskEmailForm;
