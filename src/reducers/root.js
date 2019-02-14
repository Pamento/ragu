import { combineReducers } from 'redux';
import questions from './questions';
import screen from './screen';
import userEmail from './userEmail'

export default combineReducers({ questions, screen, userEmail });

// ///////////////////////////// screen
// let INITIAL_STATE_SCREEN = {
	// theme: 0,
	// count: 0,
	// loader: false
// };

// /////////////////////////// userEmail
// let INITIAL_STATE_EMAIL = {
// 	userEmail: '',
// };

// ///////////////////////////////// questions
// let INITIAL_STATE_QUESTIONS = {
//   questions: 0,
//   courentQuestion: 0,
//   score: 0,
// 	loader: false
// };