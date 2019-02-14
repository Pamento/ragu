import React, { Component } from 'react';
import './RresultScreen.css';
import BTN from '../Button/Button';

class ResultScreen extends Component {
  render() {
    console.log('Result_SCREEN_PROPS: ',this.props);
    return (
      <section className="resultScreen">
        <h1>Les resulta de votre savoir</h1>
        <span className="score"></span>
        <BTN className="btnRetoure" type="button">Submit & send</BTN>
      </section>
    );
  }
}

export default ResultScreen;
