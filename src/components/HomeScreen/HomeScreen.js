import React, { Component } from 'react';
import './HomeScreen.css';
import AskEmailForm from '../../containers/AskEmailForm';
import Loader from '../Loader/Loader';
import {  } from '../../actions/index';

class HomeScreen extends Component {
  render() {
    return (
      <section className="homeScreen">
      <h1>Questionare about this</h1>
      <div>
        <AskEmailForm className="AskEmailForm"></AskEmailForm>
      </div>
        {this.props.loader && <Loader />}
      </section>
    );
  }
}

export default HomeScreen;