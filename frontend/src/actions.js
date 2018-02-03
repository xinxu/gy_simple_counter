import * as actionTypes from './actionTypes'

export function connectServer() {
    return {
        type: actionTypes.CONNECT_SERVER
    }
}

export function connectServerSuccess() {
    return {
        type: actionTypes.CONNECT_SERVER_SUCCESS
    }
}

export function connectServerFailed() {
    return {
        type: actionTypes.CONNECT_SERVER_FAILED
    }
}

export function startCounter() {
    return {
        type: actionTypes.START_COUNTER
    };
}

export function pauseCounter() {
    return {
        type: actionTypes.PAUSE_COUNTER
    };
}

export function resetCounter() {
    return {
        type: actionTypes.RESET_COUNTER
    };
}

export function updateNumber(v) {
    return {
        type: actionTypes.UPDATE_NUMBER,
        value: v
    }
}
