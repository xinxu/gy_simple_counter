import * as actionTypes from './actionTypes'
import * as actions from './actions'
import {ConnectionStatus, CounterStatus} from './constants'

const initialState = {
    connectionStatus: ConnectionStatus.NOT_CONNECTED,
    counterStatus: CounterStatus.NOT_STARTED,
    counterNumber: 0
}

function counterApp(state = initialState, action) {
    switch (action.type) {
        case actionTypes.START_COUNTER:
            if (state.connectionStatus != ConnectionStatus.CONNECTED) {
                return state
            }
            return Object.assign({}, state, {
                counterStatus: CounterStatus.RUNNING
            })
        case actionTypes.RESET_COUNTER:
            if (state.connectionStatus != ConnectionStatus.CONNECTED) {
                return state
            }
            return Object.assign({}, state, {
                counterStatus: CounterStatus.NOT_STARTED
            })
        case actionTypes.PAUSE_COUNTER:
            if (state.connectionStatus != ConnectionStatus.CONNECTED) {
                return state
            }
            return Object.assign({}, state, {
                counterStatus: CounterStatus.PAUSED
            })
        case actionTypes.CONNECT_SERVER:
            return Object.assign({}, state, {
                connectionStatus: ConnectionStatus.CONNECTING
            })
        case actionTypes.CONNECT_SERVER_SUCCESS:
            return Object.assign({}, state, {
                connectionStatus: ConnectionStatus.CONNECTED
            })
        case actionTypes.CONNECT_SERVER_FAILED:
            return Object.assign({}, state, {
                connectionStatus: ConnectionStatus.NOT_CONNECTED
            })
        case actionTypes.UPDATE_NUMBER:
            if (state.connectionStatus != ConnectionStatus.CONNECTED) {
                return state
            }
            if (state.counterStatus != CounterStatus.RUNNING) {
                return state
            }
            return Object.assign({}, state, {
                counterNumber: action.value
            })
        default:
            return state
    }
}

export default counterApp