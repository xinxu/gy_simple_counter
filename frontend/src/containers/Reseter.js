import { connect } from 'react-redux'
import ResetView from '../components/ResetView'
import { CounterStatus } from '../constants'
import * as actions from '../actions'

const mapStateToProps = (state) => {
    return {
        disabled: !state.connected || state.counterStatus == CounterStatus.NOT_STARTED
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(actions.resetCounter())
        }
    }
}

const Reseter = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetView)

export default Reseter