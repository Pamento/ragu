import QuestScreen from '../components/QuestionareScreen/QuestionareScreen'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { show_loader, questions, valid_answer } from '../actions/index';

const mapStateToProps = state => {
	console.log('questions_STATE',state);
	return {
		name: state.questions.name,
		question: state.questions.questions,
		courentQuestion: state.questions.courentQuestion,
		score: state.questions.score,
		loader: state.screen.loader,
	}
}
const mapDispatchtoProps = dispatch => ({
	actions: bindActionCreators({ show_loader, questions, valid_answer }, dispatch)
})

export default connect(mapStateToProps, mapDispatchtoProps)(QuestScreen)
