import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import * as actionTypes from './actionTypes'
import * as actions from './actions'
import {CounterStatus} from './constants'

const initialState = {
    connected: false,
    counterStatus: CounterStatus.NOT_STARTED,
    counterNumber: 0
}

function counterApp(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case `@@websocket/${OPEN}`:
            return { ...state, connected: true}

        case `@@websocket/${CLOSE}`:
            return { ...state, connected: false}
        case 'SERVER/UPDATE':
            if (state.counterStatus != CounterStatus.RUNNING) {
                return state
            }
            console.log(action.payload)
            return { ...state, ...action.payload, connected: true };
        case 'SERVER/STARTED':
            return { ...state, counterStatus: CounterStatus.RUNNING, connected: true };
        case 'SERVER/PAUSED':
            return { ...state, counterStatus: CounterStatus.PAUSED, connected: true };
        case 'SERVER/RESETED':
            return { ...state, ...action.payload, counterStatus: CounterStatus.NOT_STARTED, connected: true };
        default:
            return state
    }
}

export default counterApp