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
        type: 'CLIENT/START',
        meta: { send: true }
    };
}

export function pauseCounter() {
    return {
        type: 'CLIENT/PAUSE',
        meta: { send: true }
    };
}

export function resetCounter() {
    return {
        type: 'CLIENT/RESET',
        meta: { send: true }
    };
}