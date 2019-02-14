import HomeScreen from '../components/HomeScreen/HomeScreen'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return {	}
}
const mapDispatchtoProps = dispatch => ({
	actions: bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchtoProps)(HomeScreen)
