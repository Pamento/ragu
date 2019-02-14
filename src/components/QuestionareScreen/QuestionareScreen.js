import React, { Component } from 'react';
import './QuestionareScreen.css';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

// const allAnswers = this.props.question[this.props.courentQuestion].answers;
// const answers = allAnswers.legnth;
const ListItem = ({ value, onClick, isOk }) => ( <li onClick={onClick} customanswer={isOk}>{value}</li> );

const List = ({ items, onItemClick }) => (
  <ol>
    {
      items.map((item, i) => <ListItem key={i} value={item.answer} onClick={onItemClick} customanswer={item.correct}/>)
    }
  </ol>
);

class QuestScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      answers: this.props.question[this.props.courentQuestion].answers
    };
  }
  
  onClick = () => {
    // const { inputValue, fruites } = this.state;
    // if (inputValue) {
    //   const nextState = [...fruites, inputValue];
    //   this.setState({ fruites: nextState, inputValue: '' });
    // }
    this.props.actions.valid_answer();
    
  }

  // onChange = (e) => this.setState({ inputValue: e.target.value });

  handleItemClick = (e) => {
    console.log('question state global ',this.state);
    console.log('question state.answers[0].answer ',this.state.answers[0].answer);
    console.log('question state.answers[0].correct ',this.state.answers[0].correct);
    
  }
  // render() {
  //   const { fruites, inputValue } = this.state;
  //   return (
  //     <div>
  //       <input type="text" value={inputValue} onChange={this.onChange} />
  //       <button onClick={this.onClick}>Add</button>
  //       <List items={fruites} onItemClick={this.handleItemClick} />
  //     </div>
  //   );
  // }
  render() {
    console.log('question.props',this.props);
    const { answers } = this.state;
    return (
      <section className="questScreen">
        <h1>What do you think about <span className="themeOfQuestions">{this.props.name}</span> ?</h1>
        <h3>{this.props.question[this.props.courentQuestion].question}</h3>
        <div className="questionsList">
          <List items={answers} onItemClick={this.handleItemClick} />
        </div>
        <Button onClick={this.onClick} label="valide reponse" />
        {this.props.loader && <Loader />}
      </section>
    );
  }
}

export default QuestScreen;
