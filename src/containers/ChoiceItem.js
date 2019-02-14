import ChoiceItem from '../components/ChoiceScreen/ChoiceItem/ChoiceItem';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { choiceItemDon } from '../actions/index';

const mapStateToProps = state => {
	console.log('choiceItem_STATE: ',state);
	return {
		theme: state.screen.theme,
		questions: state.questions.questions
	}
}
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ choiceItemDon }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceItem)
