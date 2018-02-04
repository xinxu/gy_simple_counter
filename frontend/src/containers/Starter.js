import { connect } from 'react-redux'
import StartView from '../components/StartView'
import { CounterStatus } from '../constants'
import * as actions from '../actions'

const isPause = state => {
    return state.counterStatus == CounterStatus.RUNNING
}

const mapStateToProps = (state) => {
    return {
        isPauseButton: isPause(state),
        disabled: !state.connected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: isPauseButton => {
            if (isPauseButton) {
                dispatch(actions.pauseCounter())
            } else {
                dispatch(actions.startCounter())
            }
        }
    }
}

const Starter = connect(
    mapStateToProps,
    mapDispatchToProps
)(StartView)

export default Starter