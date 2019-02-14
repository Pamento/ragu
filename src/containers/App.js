import App from '../components/App'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {  } from '../actions/index'

const mapStateToProps = state => {
	console.log('AppContainerState',state);
	return {
		theme: state.screen.theme,
		count: state.screen.count,
		loader: state.screen.loader
	}
}
const mapDispatchtoProps = dispatch => ({
	actions: bindActionCreators({ }, dispatch)
})

export default connect(mapStateToProps, mapDispatchtoProps)(App)
