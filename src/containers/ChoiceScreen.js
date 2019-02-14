import ChoiceScreen from '../components/ChoiceScreen/ChoiceScreen'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { choiceItemDon } from '../actions/index';

const mapStateToProps = state => {
	return {
		theme: state.screen.theme,
		questions: state.questions.questions
	}
}
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ choiceItemDon }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceScreen)
