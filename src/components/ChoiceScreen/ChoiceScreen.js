import React, { Component } from 'react';
import ChoiceItem from '../../containers/ChoiceItem';
import './ChoiceScreen.css';
import Loader from '../Loader/Loader';

export default class ChoiceScreen extends Component {

  choiceItemDon(choice) {
    this.props.actions.choiceItemDon(choice,2);
    
  }
  render() {
    return (
      <section className="choiceScreen">
        <h2>Screen of Choice of the items</h2>
        <div className="itemsBox">
          <ChoiceItem onClick={() => this.choiceItemDon('html')} label="html" />
          <ChoiceItem onClick={() => this.choiceItemDon('js')} label="js" />
          <ChoiceItem onClick={() => this.choiceItemDon('php')} label="php" />
        </div>
        {this.props.loader && <Loader />}
      </section>
    );
  }
}
