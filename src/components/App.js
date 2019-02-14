import React, { Component } from 'react';
import ChoiceScreen from '../containers/ChoiceScreen';
import HomeScreen from '../containers/HomeScreen';
import ResutlScreen from '../containers/ResutlScreen';
import QuestScreen from '../containers/QuestScreen';
import './App.css';
import Loader from './Loader/Loader';

class App extends Component {
  render() {
    return (
      <main className="App">
        {this.props.theme === 0 && <HomeScreen />}
        {this.props.theme === 1 && <ChoiceScreen />}
        {this.props.theme === 2 && <QuestScreen />}
        {this.props.theme === 3 && <ResutlScreen />}
        {/* <button onClick={this.props.actions.increment}>Add</button>
        <button onClick={this.props.actions.decrement}>Dec</button> */}
        {this.props.loader && <Loader />}
      </main>
    );
  }
}

export default App;
