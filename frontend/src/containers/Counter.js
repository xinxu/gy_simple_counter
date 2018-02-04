import { connect } from 'react-redux'
import CounterView from '../components/CounterView'

const stateToText = state => {
    if (!state.connected) {
        return '0'
    }
    return state.counterNumber.toString()
}

const mapStateToProps = (state) => {
    return {
        value: stateToText(state)
    }
}

const Counter = connect(
    mapStateToProps
)(CounterView)

export default Counter