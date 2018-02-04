import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import ReduxWebSocketBridge from 'redux-websocket-bridge'
import counterApp from './reducers'
import App from './components/App'

const wsAddressWithPath = (path) => {
	let loc = window.location
	let uri = `ws://${loc.host}/${path}/`
	return uri
}

const createStoreWithMiddleware = applyMiddleware(
  ReduxWebSocketBridge(wsAddressWithPath('counter'))
)(createStore);

let store = createStoreWithMiddleware(counterApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)