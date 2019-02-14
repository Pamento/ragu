import AskEmailForm from '../components/HomeScreen/AskEmailForm/AskEmailForm';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMailAndScreen } from '../actions';

const mapStateToProps = state => {
	return {
  	theme: state.screen.theme,
  	mail: state.userEmail.userEmail
	}
}
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({updateMailAndScreen}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AskEmailForm)
