import React from 'react'
import Connection from '../containers/Connection'
import CSSModules from 'react-css-modules'
import styles from 'Styles/app.css'

const App = () => (
  <div styleName='app'>
    <Connection />
  </div>
)

export default CSSModules(App, styles)