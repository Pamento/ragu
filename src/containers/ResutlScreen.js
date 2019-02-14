import ResutlScreen from '../components/ResultScreen/RresultScreen'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
  console.log(state);
  return {

  }
}
const mapDispatchtoProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchtoProps)(ResutlScreen)
